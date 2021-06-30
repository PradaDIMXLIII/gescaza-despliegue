package es.mde.gescaza.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import es.prada.eventos.Punto;

@Entity
@Table(name = "PUNTOS")
public class PuntoConId extends Punto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "zonacazaimp")
	private ZonaCazaConId zonaCazaImp;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "zonacazaiti")
	private ZonaCazaConId zonaCazaIti;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "zonacazacoord")
	private ZonaCazaConId zonaCazaCoord;

	public Long getId() {
		return id;
	}

	public ZonaCazaConId getZonaCazaImp() {
		return zonaCazaImp;
	}

	public void setZonaCazaImp(ZonaCazaConId zonaCazaImp) {
		this.zonaCazaImp = zonaCazaImp;
	}

	public ZonaCazaConId getZonaCazaIti() {
		return zonaCazaIti;
	}

	public void setZonaCazaIti(ZonaCazaConId zonaCazaIti) {
		this.zonaCazaIti = zonaCazaIti;
	}

	public ZonaCazaConId getZonaCazaCoord() {
		return zonaCazaCoord;
	}

	public void setZonaCazaCoord(ZonaCazaConId zonaCazaCoord) {
		this.zonaCazaCoord = zonaCazaCoord;
	}

	public PuntoConId() {

	}

}
