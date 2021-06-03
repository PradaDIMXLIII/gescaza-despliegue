package es.mde.gescaza.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.mde.gescaza.entidades.NucleoCinologicoConId;

@RepositoryRestResource(path = "nucleocinologicos", itemResourceRel = "nucleocinologico", collectionResourceRel = "nucleocinologicos")
public interface NucleoCinologicoDAO extends JpaRepository<NucleoCinologicoConId, String> {

	@RestResource(path = "nucleo-por-numRegistro")
	List<NucleoCinologicoConId> findBynumRegistroIgnoreCaseContaining(@Param("nombre") String nombre);

}
