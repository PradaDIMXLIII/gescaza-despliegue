package es.mde.gescaza.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.mde.gescaza.entidades.CazaConId;

@RepositoryRestResource(path = "cazas", itemResourceRel = "caza", collectionResourceRel = "cazas")
public interface CazaDAO extends JpaRepository<CazaConId, Long>, CazaDAOCustom {

	@RestResource(path = "cazas-por-tipo")
	List<CazaConId> findBytipoCazaIgnoreCaseContaining(@Param("tipo") String tipoCaza);

}
