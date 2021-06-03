package es.mde.gescaza.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.mde.gescaza.entidades.PerroConId;

@RepositoryRestResource(path = "perros", itemResourceRel = "perro", collectionResourceRel = "perros")
public interface PerroDAO extends JpaRepository<PerroConId, String>{
	
	@RestResource(path = "perro-por-chip")
	List<PerroConId> findBychipIgnoreCaseContaining(@Param("chip") String chip);

}
