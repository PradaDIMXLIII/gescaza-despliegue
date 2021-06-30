package es.mde.gescaza.repositorios;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import es.mde.gescaza.entidades.CazaConId;

@Transactional(readOnly = true)
public class CazaDAOImpl implements CazaDAOCustom {
	
	@Autowired
	CazaDAO cazaDAO;

	@PersistenceContext
	EntityManager entityManager;

	@Override
	public List<CazaConId> getCazasPorFecha(Instant fecha) {
		List<CazaConId> cazas = cazaDAO.findAll().stream().filter(c -> c.getFechaEvento().equals(fecha)).collect(Collectors.toList());
		return cazas;
	}

	@Override
	public List<CazaConId> getCazasPorFechaPosterior(Instant fecha) {
		List<CazaConId> cazas = cazaDAO.findAll().stream().filter(c -> c.getFechaEvento().isAfter(fecha)).collect(Collectors.toList());
		return cazas;
	}

}
