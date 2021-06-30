package es.mde.gescaza.repositorios;

import java.util.List;

import es.mde.gescaza.entidades.TarjetaInvCazaConId;

public interface TarjetaDAOCustom {
	

	List<TarjetaInvCazaConId> getTarjetasPorNumInvitaciones(int numInvitaciones);
	
	boolean invitarEventoCaza(Long id);

}
