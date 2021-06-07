package es.mde.gescaza.repositorios;

import javax.persistence.PrePersist;
import javax.persistence.PreRemove;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import es.mde.gescaza.entidades.CazadorConId;

@Component
public class CazadorConIdListener {

	private CazadorDAO cazadorDao;
	private static final Logger log = LoggerFactory.getLogger(CazadorConIdListener.class);

	@Autowired
	public void init(CazadorDAO cazadorDAO) {
		this.cazadorDao = cazadorDAO;
	}

	public CazadorDAO getCazadorDao() {
		return cazadorDao;
	}

	@PrePersist
	// invocado automaticamente antes del persist (guardar)
	public void preGuardarCazador(CazadorConId cazador) {
		log.info("Se va a guardar un cazador: " + cazador.getNombre());
	}

	@PreRemove
	// invocado automaticamente antes de borrar
	public void preBorrar(CazadorConId cazador) {
		log.warn("Se va a borrar un cazador: " + cazador.getNombre());

	}

}
