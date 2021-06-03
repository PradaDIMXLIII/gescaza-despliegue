package es.mde.gescaza.entidades;

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

import es.prada.cazador.NivelAdiestramiento;
import es.prada.cazador.Perro;
import es.prada.cazador.Vacuna;

@Entity
@Table(name = "PERROS")
public class PerroConId extends Perro {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private String id;

	private String observacionesPerro;

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

	public String getId() {
		return id;
	}

	public PerroConId() {
		super();
	}

	public void addVacuna(VacunaConId vacuna) {
		super.addVacuna(vacuna);
		vacuna.setPerro(this);
	}

}
