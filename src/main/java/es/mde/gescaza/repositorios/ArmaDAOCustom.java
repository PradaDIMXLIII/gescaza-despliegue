package es.mde.gescaza.repositorios;

import java.util.List;

import es.mde.gescaza.entidades.ArmaConId;

public interface ArmaDAOCustom {
	
	List<ArmaConId> getArmasPorCalibre(String calibre);

}
