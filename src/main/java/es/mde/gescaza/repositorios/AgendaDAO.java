package es.mde.gescaza.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.mde.gescaza.entidades.AgendaConId;

@RepositoryRestResource(path = "agendas", itemResourceRel = "agenda", collectionResourceRel = "agendas")
public interface AgendaDAO extends JpaRepository<AgendaConId, Long> {

	@RestResource(path = "agenda-por-anyo")
	List<AgendaConId> findByanyoIgnoreCaseContaining(@Param("anyo") String anyo);

}
