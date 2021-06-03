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

import es.prada.cazador.TarjetaInvCaza;

@Entity
@Table(name = "TARJETAS")
public class TarjetaInvCazaConId extends TarjetaInvCaza {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private String id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cazador")
	private CazadorConId cazador;

	public CazadorConId getCazador() {
		return cazador;
	}

	public void setCazador(CazadorConId cazador) {
		this.cazador = cazador;
	}

	public String getId() {
		return id;
	}

	public TarjetaInvCazaConId() {
		super();
	}

}
