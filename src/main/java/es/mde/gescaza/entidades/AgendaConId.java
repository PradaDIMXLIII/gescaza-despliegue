package es.mde.gescaza.entidades;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import es.prada.eventos.Agenda;
import es.prada.eventos.Evento;

@Entity
@Table(name = "AGENDAS")
public class AgendaConId extends Agenda {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cazador")
	private CazadorConId cazador;

	@Override
	@OneToMany(targetEntity = EventoConId.class)
	public List<Evento> getEventos() {
		return super.getEventos();
	}

	public Long getId() {
		return id;
	}

	public CazadorConId getCazador() {
		return cazador;
	}

	public void setCazador(CazadorConId cazador) {
		this.cazador = cazador;
	}

	public AgendaConId() {

	}

	// establece la relación en los dos sentidos
	public void addEventoConId(EventoConId evento) {
		super.addEvento(evento);
		evento.setAgenda(this);
	}

}
