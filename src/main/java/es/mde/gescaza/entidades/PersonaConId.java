package es.mde.gescaza.entidades;

import java.time.Instant;
import java.time.temporal.ChronoUnit;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import es.prada.cazador.Persona;

@Entity
@Table(name = "PERSONAS")
public class PersonaConId extends Persona {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Long id;

	public Long getId() {
		return id;
	}

	public PersonaConId() {
		super();
	}

	@Override
	public long getEdad() {
		return calcularEdad(this.getFechaNacimiento());
	}
	
	
	private long calcularEdad(Instant nacimiento) {
		Instant ahora = Instant.now();
		return ChronoUnit.YEARS.between(nacimiento, ahora);
	}

}
