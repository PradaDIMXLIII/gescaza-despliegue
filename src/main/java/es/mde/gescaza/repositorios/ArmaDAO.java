package es.mde.gescaza.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.mde.gescaza.entidades.ArmaConId;

@RepositoryRestResource(path = "armas", itemResourceRel = "arma", collectionResourceRel = "armas")
public interface ArmaDAO extends JpaRepository<ArmaConId, String>{
	
	@RestResource(path = "arma-por-nombre")
	List<ArmaConId> findBynombreIgnoreCaseContaining(@Param("nombre") String nombre);


}
