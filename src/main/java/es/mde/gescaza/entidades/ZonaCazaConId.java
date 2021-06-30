package es.mde.gescaza.entidades;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import es.prada.eventos.Punto;
import es.prada.eventos.ZonaCaza;

@Entity
@Table(name = "ZONAS_CAZA")
public class ZonaCazaConId extends ZonaCaza {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Long id;

	@Column(name = "Observaciones")
	private String observacionesZona;

	public Long getId() {
		return id;
	}

	public String getObservacionesZona() {
		return observacionesZona;
	}

	public void setObservacionesZona(String observacionesZona) {
		this.observacionesZona = observacionesZona;
	}

	public CazaConId getCaza() {
		return caza;
	}

	public void setCaza(CazaConId caza) {
		this.caza = caza;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "caza")
	private CazaConId caza;

	@Override
	@OneToMany(targetEntity = PuntoConId.class)
	public Collection<Punto> getPuntosImportantes() {
		return super.getPuntosImportantes();
	}

	@Override
	@OneToMany(targetEntity = PuntoConId.class)
	public Collection<Punto> getItinerarioCaza() {
		return super.getItinerarioCaza();
	}

	@Override
	@OneToMany(targetEntity = PuntoConId.class)
	public Collection<Punto> getCoordLimitesZona() {
		return super.getCoordLimitesZona();
	}

	public ZonaCazaConId() {

	}

	public void addPuntoImportante(PuntoConId puntoImportante) {
		super.addPuntoImportante(puntoImportante);
		puntoImportante.setZonaCazaImp(this);
	}

	public void addPuntoItinerario(PuntoConId puntoItinerario) {
		super.addPuntoIntinerario(puntoItinerario);
		puntoItinerario.setZonaCazaIti(this);
	}

	public void addPuntoCoordLimZona(PuntoConId puntoCoordLimZona) {
		super.addPuntoCoordLimites(puntoCoordLimZona);
		puntoCoordLimZona.setZonaCazaCoord(this);
	}

}
