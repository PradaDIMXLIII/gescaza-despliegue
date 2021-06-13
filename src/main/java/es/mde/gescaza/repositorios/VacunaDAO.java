package es.mde.gescaza.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.mde.gescaza.entidades.VacunaConId;

@RepositoryRestResource(path = "vacunas", itemResourceRel = "vacuna", collectionResourceRel = "vacunas")
public interface VacunaDAO extends JpaRepository<VacunaConId, Long>{
	
	@RestResource(path = "vacuna-renovada")
	List<VacunaConId> findByrenovada(@Param("isRenovada") Boolean renovada);

}
