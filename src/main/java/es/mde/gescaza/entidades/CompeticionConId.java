package es.mde.gescaza.entidades;

import es.prada.eventos.Competicion;

public class CompeticionConId extends EventoConId implements Competicion {

	private String nombre;
	private String inscripcion;
	private int puesto;
	private int ranking;

	private String mejorasCompeticion;

	public String getMejorasCompeticion() {
		return mejorasCompeticion;
	}

	public void setMejorasCompeticion(String mejorasCompeticion) {
		this.mejorasCompeticion = mejorasCompeticion;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getInscripcion() {
		return inscripcion;
	}

	public void setInscripcion(String inscripcion) {
		this.inscripcion = inscripcion;
	}

	public int getPuesto() {
		return puesto;
	}

	public void setPuesto(int puesto) {
		this.puesto = puesto;
	}

	public int getRanking() {
		return ranking;
	}

	public void setRanking(int ranking) {
		this.ranking = ranking;
	}

	public CompeticionConId() {
		super();
	}

	@Override
	public void addMejora(String mejora) {
		setMejorasCompeticion(mejora);
	}

	@Override
	public void actualizarRanking(int ranking) {
		setRanking(ranking);
	}

}
