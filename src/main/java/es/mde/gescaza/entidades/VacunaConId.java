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

import es.prada.cazador.Vacuna;

@Entity
@Table(name = "VACUNAS")
public class VacunaConId extends Vacuna {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private String id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "perro")
	private PerroConId perro;

	public PerroConId getPerro() {
		return perro;
	}

	public void setPerro(PerroConId perro) {
		this.perro = perro;
	}

	public String getId() {
		return id;
	}

	public VacunaConId() {
		super();
	}

}
