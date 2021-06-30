package es.mde.gescaza.repositorios;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import es.mde.gescaza.entidades.TarjetaInvCazaConId;

@Transactional(readOnly = true)
public class TarjetaDAOImpl implements TarjetaDAOCustom {

	@Autowired
	TarjetaDAO tarjetaDAO;

	@PersistenceContext
	EntityManager entityManager;
	
	@Override
	public List<TarjetaInvCazaConId> getTarjetasPorNumInvitaciones(int numInvitaciones) {
		List<TarjetaInvCazaConId> tarjetas = tarjetaDAO.findAll().stream()
				.filter(j -> j.getNumInvitaciones() >= numInvitaciones)
				.collect(Collectors.toList());
		return tarjetas;
	}

	@Override
	public boolean invitarEventoCaza(Long id) {
		TarjetaInvCazaConId tarjeta = tarjetaDAO.findById(id).get();
		boolean resultado = false;
		int numInvitaciones = tarjeta.getNumInvitaciones();
		if (numInvitaciones > 0) {
			tarjeta.setNumInvitaciones(numInvitaciones - 1);
			resultado = true;
		}
		return resultado;
	}

}
