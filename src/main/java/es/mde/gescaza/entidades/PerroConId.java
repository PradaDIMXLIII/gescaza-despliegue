package es.mde.gescaza.entidades;

import java.time.Instant;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import es.prada.cazador.NivelAdiestramiento;
import es.prada.cazador.Perro;
import es.prada.cazador.Vacuna;

@Entity
@Table(name = "PERROS")
public class PerroConId extends Perro {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Long id;

	private String observacionesPerro;
	private String nombrePerro;

	@Override
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss[.SSS][.SS][.S]", timezone = "UTC")
	public Instant getFechaNacimiento() {
		return super.getFechaNacimiento();
	}

	@Enumerated(EnumType.STRING)
	private NivelAdiestramiento nivelAdiestramiento;

	@Override
	@OneToMany(targetEntity = VacunaConId.class)
	public Collection<Vacuna> getVacunas() {
		return super.getVacunas();
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "nucleoCinologico")
	private NucleoCinologicoConId nucleoCinologico;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "caza")
	private CazaConId caza;

	public CazaConId getCaza() {
		return caza;
	}

	public void setCaza(CazaConId caza) {
		this.caza = caza;
	}

	public NucleoCinologicoConId getNucleoCinologico() {
		return nucleoCinologico;
	}

	public String getObservacionesPerro() {
		return observacionesPerro;
	}

	public void setObservacionesPerro(String observacionesPerro) {
		this.observacionesPerro = observacionesPerro;
	}

	public void setNucleoCinologico(NucleoCinologicoConId nucleoCinologico) {
		this.nucleoCinologico = nucleoCinologico;
	}

	public Long getId() {
		return id;
	}

	public String getNombrePerro() {
		return nombrePerro;
	}

	public void setNombrePerro(String nombrePerro) {
		this.nombrePerro = nombrePerro;
	}

	public PerroConId() {
		super();
	}

	public void addVacuna(VacunaConId vacuna) {
		super.addVacuna(vacuna);
		vacuna.setPerro(this);
	}

}
