package es.mde.gescaza.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import es.mde.gescaza.entidades.OcioCulturalConId;

@RepositoryRestResource(path = "ocioculturales", itemResourceRel = "ociocultural", collectionResourceRel = "ocioculturales")
public interface OcioCulturalDAO extends JpaRepository<OcioCulturalConId, Long>{

}
