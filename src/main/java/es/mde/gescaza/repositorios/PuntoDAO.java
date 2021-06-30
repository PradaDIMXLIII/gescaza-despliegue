package es.mde.gescaza.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import es.mde.gescaza.entidades.PuntoConId;

@RepositoryRestResource(path = "puntos", itemResourceRel = "punto", collectionResourceRel = "puntos")
public interface PuntoDAO extends JpaRepository<PuntoConId, Long>{

}
