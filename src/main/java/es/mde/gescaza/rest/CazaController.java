package es.mde.gescaza.rest;

import java.time.Instant;
import java.util.List;

import org.springframework.data.rest.webmvc.PersistentEntityResource;
import org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.hateoas.CollectionModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import es.mde.gescaza.entidades.CazaConId;
import es.mde.gescaza.repositorios.CazaDAO;

@RepositoryRestController
@RequestMapping(path = "/cazas/search")
public class CazaController {

	private CazaDAO cazaDAO;

	public CazaController(CazaDAO cazaDAO) {
		this.cazaDAO = cazaDAO;
	}

	@GetMapping("/porFecha")
	@ResponseBody
	public CollectionModel<PersistentEntityResource> getCazasPorFecha(@RequestParam Instant fecha,
			PersistentEntityResourceAssembler assembler) {

		List<CazaConId> cazas = cazaDAO.getCazasPorFecha(fecha);

		return assembler.toCollectionModel(cazas);
	}

	@GetMapping("/porFechaPosterior")
	@ResponseBody
	public CollectionModel<PersistentEntityResource> getCazasPorFechaPosterior(@RequestParam Instant fecha,
			PersistentEntityResourceAssembler assembler) {

		List<CazaConId> cazas = cazaDAO.getCazasPorFechaPosterior(fecha);

		return assembler.toCollectionModel(cazas);
	}

}
