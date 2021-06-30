package es.mde.gescaza.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import es.mde.gescaza.entidades.CompeticionConId;

@RepositoryRestResource(path = "competiciones", itemResourceRel = "competicion", collectionResourceRel = "competiciones")
public interface CompeticionDAO extends JpaRepository<CompeticionConId, Long> {

}
