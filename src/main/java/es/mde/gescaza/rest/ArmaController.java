package es.mde.gescaza.rest;

import java.util.List;

import org.springframework.data.rest.webmvc.PersistentEntityResource;
import org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.hateoas.CollectionModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import es.mde.gescaza.entidades.ArmaConId;
import es.mde.gescaza.repositorios.ArmaDAO;

@RepositoryRestController
@RequestMapping(path = "/armas/search")
public class ArmaController {
	
	private ArmaDAO armaDAO;
	
	public ArmaController(ArmaDAO armaDAO) {
		this.armaDAO = armaDAO;
	}
	
	@GetMapping("/porCalibre")
	@ResponseBody
	public CollectionModel<PersistentEntityResource> getArmasPorCalibre(@RequestParam String calibre, PersistentEntityResourceAssembler assembler) {

		List<ArmaConId> armas = armaDAO.getArmasPorCalibre(calibre);

		return assembler.toCollectionModel(armas);
	}
	
	

}
