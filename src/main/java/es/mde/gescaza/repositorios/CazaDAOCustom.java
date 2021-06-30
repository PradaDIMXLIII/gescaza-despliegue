package es.mde.gescaza.repositorios;

import java.time.Instant;
import java.util.List;

import es.mde.gescaza.entidades.CazaConId;

public interface CazaDAOCustom {
	
	List<CazaConId> getCazasPorFecha(Instant fecha);
	
	List<CazaConId> getCazasPorFechaPosterior(Instant fecha);

}
