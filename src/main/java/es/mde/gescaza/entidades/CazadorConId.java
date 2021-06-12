package es.mde.gescaza.entidades;

import java.time.Instant;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import es.mde.gescaza.repositorios.CazadorConIdListener;
import es.prada.cazador.Arma;
import es.prada.cazador.Cazador;
import es.prada.cazador.NucleoCinologico;
import es.prada.cazador.TarjetaInvCaza;

@Entity
@EntityListeners(CazadorConIdListener.class)
@Table(name = "CAZADORES")
public class CazadorConId extends Cazador {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Long id;

	@Override
	@OneToMany(targetEntity = ArmaConId.class)
	public Collection<Arma> getArmas() {
		return super.getArmas();
	}

	@Override
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss[.SSS][.SS][.S]", timezone = "UTC")
	public Instant getFechaNacimiento() {
		return super.getFechaNacimiento();
	}

	@Override
	@OneToMany(targetEntity = TarjetaInvCazaConId.class)
	public Collection<TarjetaInvCaza> getTarjetas() {
		return super.getTarjetas();
	}

	@Override
	@OneToOne(targetEntity = NucleoCinologicoConId.class)
	//@JoinColumn(name = "NucleoCinologico_ID")
	public NucleoCinologico getNucleoCinologico() {
		return super.getNucleoCinologico();
	}

	public Long getId() {
		return id;
	}

	public CazadorConId() {
		super();
	}

	public void addArmaConId(ArmaConId arma) {
		super.addArma(arma);
		arma.setCazador(this);
	}

	public void addTarjetaConId(TarjetaInvCazaConId tarjeta) {
		super.adTarjetaInvCaza(tarjeta);
		tarjeta.setCazador(this);
	}

	public void setNucleoCinologicoConId(NucleoCinologicoConId nucleoCinologico) {
		super.setNucleoCinologico(nucleoCinologico);
		nucleoCinologico.setCazador(this);
	}

}
