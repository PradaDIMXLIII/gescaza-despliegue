package es.mde.gescaza;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.RepositorySearchesResource;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import es.mde.gescaza.entidades.ArmaConId;
import es.mde.gescaza.entidades.CazadorConId;
import es.mde.gescaza.entidades.PerroConId;
import es.mde.gescaza.entidades.TarjetaInvCazaConId;
import es.mde.gescaza.rest.ArmaController;
import es.mde.gescaza.rest.Mixins;
import es.mde.gescaza.rest.TarjetaController;

@Configuration
@PropertySource({ "classpath:config/rest.properties" })
public class ConfiguracionPorJava {

	@Bean
	public ObjectMapper getObjectMapper() {

		ObjectMapper mapper = new ObjectMapper();
		mapper.addMixIn(CazadorConId.class, Mixins.CazadorConId.class);
		mapper.addMixIn(PerroConId.class, Mixins.PerroConId.class);

		return mapper;
	}

	@Bean
	RepresentationModelProcessor<RepositorySearchesResource> addSearchLinks(RepositoryRestConfiguration config) {
		Map<Class<?>, Class<?>> controllersRegistrados = new HashMap<>();

		controllersRegistrados.put(ArmaConId.class, ArmaController.class);
		controllersRegistrados.put(TarjetaInvCazaConId.class, TarjetaController.class);

		return new RepresentationModelProcessor<RepositorySearchesResource>() {

			@SuppressWarnings("deprecation")
			@Override
			public RepositorySearchesResource process(RepositorySearchesResource searchResource) {
				if (controllersRegistrados.containsKey(searchResource.getDomainType())) {
					Method[] metodos = controllersRegistrados.get(searchResource.getDomainType()).getDeclaredMethods();
					for (Method m : metodos) {
						if (!m.isAnnotationPresent(ResponseBody.class))
							continue;
						try {
							Object[] pathVars = Stream.of(m.getParameters())
									.filter(p -> p.isAnnotationPresent(PathVariable.class))
									.map(p -> "(" + p.getName() + ")").collect(Collectors.toList()).toArray();
							URI uri = linkTo(m, pathVars).toUri();
							String path = new URI(uri.getScheme(), uri.getUserInfo(), uri.getHost(), uri.getPort(),
									config.getBasePath() + uri.getPath(), uri.getQuery(), uri.getFragment()).toString()
											.replace("(", "{").replace(")", "}");
							String requestParams = Stream.of(m.getParameters())
									.filter(p -> p.isAnnotationPresent(RequestParam.class)).map(Parameter::getName)
									.collect(Collectors.joining(","));
							searchResource.add(new Link(path + "{?" + requestParams + "}", m.getName()));
						} catch (URISyntaxException e) {
							e.printStackTrace();
						}
					}
				}

				return searchResource;
			}

		};

	}

	@Bean
	CorsFilter corsFilter() {
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		final CorsConfiguration config = new CorsConfiguration();
		//para solucionar errores con el Cors, poner a false
		config.setAllowCredentials(false);
		config.setAllowedOrigins(Collections.singletonList("*"));
		config.setAllowedHeaders(Arrays.asList("Origin", "Content-Type", "Accept"));
		config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "OPTIONS", "DELETE", "PATCH"));
		source.registerCorsConfiguration("/**", config);

		return new CorsFilter(source);
	}
}
