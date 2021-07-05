package es.mde.gescaza.entidades;

import javax.persistence.OneToOne;

import es.prada.eventos.OcioCultural;

public class OcioCulturalConId extends EventoConId implements OcioCultural {

	private String nombre;

	@OneToOne(targetEntity = PersonaConId.class)
	private PersonaConId acompanante;

	private String valoracion;
	private Boolean repetir;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public PersonaConId getAcompanante() {
		return acompanante;
	}

	public void setAcompanante(PersonaConId acompanante) {
		this.acompanante = acompanante;
	}

	public String getValoracion() {
		return valoracion;
	}

	public void setValoracion(String valoracion) {
		this.valoracion = valoracion;
	}

	public Boolean getRepetir() {
		return repetir;
	}

	public void setRepetir(Boolean repetir) {
		this.repetir = repetir;
	}

	public OcioCulturalConId() {
		super();
	}

	@Override
	public float calcularGasto(float precioEvento, float otrosGastos) {
		float precioTotal = 0;
		if (getAcompanante() == null) {
			precioTotal = precioEvento + otrosGastos;
		} else {
			precioTotal = (precioEvento * 2) + otrosGastos;
		}
		return precioTotal;
	}

}
