package es.mde.gescaza.entidades;

import java.time.Instant;

import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;

import es.prada.eventos.Evento;

public class EventoConId extends Evento {

	@Id
	private Long id;

	@ManyToOne
	private AgendaConId agenda;

	public AgendaConId getAgenda() {
		return agenda;
	}

	public void setAgenda(AgendaConId agenda) {
		this.agenda = agenda;
	}

	public Long getId() {
		return id;
	}
	
	@Override
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss[.SSS][.SS][.S]", timezone = "UTC")
	public Instant getFechaEvento() {
		return super.getFechaEvento();
	}

	public EventoConId() {
		super();
	}

	@Override
	public boolean addComentarios(String comentario) {
		return false;
	}

}