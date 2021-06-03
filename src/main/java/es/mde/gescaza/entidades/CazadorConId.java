package es.mde.gescaza.entidades;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import es.prada.cazador.Arma;
import es.prada.cazador.Cazador;
import es.prada.cazador.NucleoCinologico;
import es.prada.cazador.TarjetaInvCaza;

@Entity
@Table(name = "CAZADORES")
public class CazadorConId extends Cazador {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private String id;

	@Override
	@OneToMany(targetEntity = ArmaConId.class)
	public Collection<Arma> getArmas() {
		return super.getArmas();
	}

	@Override
	@OneToMany(targetEntity = TarjetaInvCazaConId.class)
	public Collection<TarjetaInvCaza> getTarjetas() {
		return super.getTarjetas();
	}

	@Override
	@OneToOne(targetEntity = NucleoCinologicoConId.class)
	@JoinColumn(name = "NucleoCinologico_ID")
	public NucleoCinologico getNucleoCinologico() {
		return super.getNucleoCinologico();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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
