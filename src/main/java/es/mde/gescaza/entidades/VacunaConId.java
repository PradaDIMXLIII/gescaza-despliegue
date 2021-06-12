package es.mde.gescaza.entidades;

import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import es.prada.cazador.Vacuna;

@Entity
@Table(name = "VACUNAS")
public class VacunaConId extends Vacuna {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "perro")
	private PerroConId perro;
	
	@Override
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss[.SSS][.SS][.S]", timezone = "UTC")
	public Instant getFechaPuesta() {
		return super.getFechaPuesta();
	}
	

	public PerroConId getPerro() {
		return perro;
	}

	public void setPerro(PerroConId perro) {
		this.perro = perro;
	}

	public Long getId() {
		return id;
	}

	public VacunaConId() {
		super();
	}

}
