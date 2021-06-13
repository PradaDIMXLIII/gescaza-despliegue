package es.mde.gescaza.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.mde.gescaza.entidades.CazadorConId;

@RepositoryRestResource(path = "cazadores", itemResourceRel = "cazador", collectionResourceRel = "cazadores")
public interface CazadorDAO extends JpaRepository<CazadorConId, Long> {

	@RestResource(path = "cazador-por-coto-caza")
	List<CazadorConId> findBycotoCazaIgnoreCaseContaining(@Param("txt") String texto);

}
