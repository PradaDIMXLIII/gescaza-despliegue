package es.mde.gescaza.repositorios;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import es.mde.gescaza.entidades.ArmaConId;

@Transactional(readOnly = true)
public class ArmaDAOImpl implements ArmaDAOCustom {

	@Autowired
	ArmaDAO armaDAO;

	@PersistenceContext
	EntityManager entityManager;

	@Override
	public List<ArmaConId> getArmasPorCalibre(String calibre) {
		List<ArmaConId> armas = armaDAO.findAll().stream().filter(j -> j.getCalibre().equals(calibre))
				.collect(Collectors.toList());
		return armas;
	}

}
