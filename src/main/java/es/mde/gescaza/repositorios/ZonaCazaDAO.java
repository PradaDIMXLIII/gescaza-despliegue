package es.mde.gescaza.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import es.mde.gescaza.entidades.ZonaCazaConId;

@RepositoryRestResource(path = "zonacazas", itemResourceRel = "zonacaza", collectionResourceRel = "zonacazas")
public interface ZonaCazaDAO extends JpaRepository<ZonaCazaConId, Long>{

}
