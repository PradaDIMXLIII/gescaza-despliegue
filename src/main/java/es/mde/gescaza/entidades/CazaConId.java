package es.mde.gescaza.entidades;

import java.util.Collection;
import java.util.Map;

import javax.persistence.OneToMany;

import es.prada.cazador.Animal;
import es.prada.eventos.Caza;
import es.prada.eventos.ZonaCaza;

public class CazaConId extends EventoConId implements Caza {

	private Long idCaza;
	private String precinto;
	private String trofeo;
	private String tipoCaza;

	@OneToMany
	private Map<String, ZonaCazaConId> zonasMarcadas;

	@OneToMany
	private Collection<PerroConId> perrosCaza;

	public Long getIdCaza() {
		return idCaza;
	}

	public void setIdCaza(Long idCaza) {
		this.idCaza = idCaza;
	}

	public String getTipoCaza() {
		return tipoCaza;
	}

	public void setTipoCaza(String tipoCaza) {
		this.tipoCaza = tipoCaza;
	}

	public String getPrecinto() {
		return precinto;
	}

	public void setPrecinto(String precinto) {
		this.precinto = precinto;
	}

	public String getTrofeo() {
		return trofeo;
	}

	public void setTrofeo(String trofeo) {
		this.trofeo = trofeo;
	}

	public Map<String, ZonaCazaConId> getZonasMarcadas() {
		return zonasMarcadas;
	}

	public Collection<PerroConId> getPerrosCaza() {
		return perrosCaza;
	}

	public CazaConId() {
		super();
	}

	@Override
	public void addAnimalesCaza(Animal perro) {
		getPerrosCaza().add((PerroConId) perro);
		((PerroConId) perro).setCaza(this);
	}

	@Override
	public void addZonaMarcada(String id, ZonaCaza zona) {
		getZonasMarcadas().put(id, (ZonaCazaConId) zona);
		((ZonaCazaConId) zona).setCaza(this);

	}

}
