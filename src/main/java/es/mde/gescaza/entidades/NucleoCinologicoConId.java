package es.mde.gescaza.entidades;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import es.prada.cazador.Animal;
import es.prada.cazador.NucleoCinologico;

@Entity
@Table(name = "NUCLEOS_CINOLOGICOS")
public class NucleoCinologicoConId extends NucleoCinologico {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private String id;

	@OneToOne(fetch = FetchType.LAZY)
	private CazadorConId cazador;
	
	@Override
	@OneToMany(targetEntity = PerroConId.class)
	public Collection<Animal> getAnimales() {
		return super.getAnimales();
	}

	public String getId() {
		return id;
	}

	public CazadorConId getCazador() {
		return cazador;
	}

	public void setCazador(CazadorConId cazador) {
		this.cazador = cazador;
	}

	public NucleoCinologicoConId() {
		super();
	}

	public NucleoCinologicoConId(String numRegistro, String nombre, Collection<Animal> animales) {
		super(numRegistro, nombre, animales);
	}

}
