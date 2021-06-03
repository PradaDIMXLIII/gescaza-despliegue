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

import es.prada.cazador.Arma;

@Entity
@Table(name = "ARMAS")
public class ArmaConId extends Arma {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private String id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cazador")
	private CazadorConId cazador;

	public String getId() {
		return id;
	}

	public CazadorConId getCazador() {
		return cazador;
	}

	public void setCazador(CazadorConId cazador) {
		this.cazador = cazador;
	}

	public ArmaConId() {
		super();
	}

}
