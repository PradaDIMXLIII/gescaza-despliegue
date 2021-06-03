package es.mde.gescaza.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.mde.gescaza.entidades.TarjetaInvCazaConId;

@RepositoryRestResource(path = "tarjetas", itemResourceRel = "tarjeta", collectionResourceRel = "tarjetas")
public interface TarjetaInvCazaDAO extends JpaRepository<TarjetaInvCazaConId, String> {
	
	@RestResource(path = "tarjeta-por-cotoCaza")
	List<TarjetaInvCazaConId> findBycotoCazaIgnoreCaseContaining(@Param("nombre") String cotoCaza);

}
