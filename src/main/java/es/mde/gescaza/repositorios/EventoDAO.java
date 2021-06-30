package es.mde.gescaza.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import es.mde.gescaza.entidades.EventoConId;

@RepositoryRestResource(path = "eventos", itemResourceRel = "evento", collectionResourceRel = "eventos")
public interface EventoDAO extends JpaRepository<EventoConId, Long>{

}
