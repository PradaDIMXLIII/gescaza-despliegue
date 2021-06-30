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

import es.mde.gescaza.entidades.TarjetaInvCazaConId;
import es.mde.gescaza.repositorios.TarjetaDAO;

@RepositoryRestController
@RequestMapping(path = "/tarjetas/search")
public class TarjetaController {
	
	private TarjetaDAO tarjetaDAO;
	
	public TarjetaController(TarjetaDAO tarjetaDAO) {
		this.tarjetaDAO = tarjetaDAO;
	}
	
	@GetMapping("/pornumInvitaciones")
	@ResponseBody
	public CollectionModel<PersistentEntityResource> getTarjetasPorNumInvitaciones(@RequestParam int numInvitaciones, PersistentEntityResourceAssembler assembler) {

		List<TarjetaInvCazaConId> tarjetas = tarjetaDAO.getTarjetasPorNumInvitaciones(numInvitaciones);

		return assembler.toCollectionModel(tarjetas);
	}
	
	@GetMapping("/invitarEventoCaza")
	@ResponseBody
	public boolean invitarEventoCaza(@RequestParam Long idTarjeta) {
		return tarjetaDAO.invitarEventoCaza(idTarjeta);
	}

}
