package es.mde.gescaza.rest;

import java.util.Collection;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

public class Mixins {
	
	// crear interfaz estatica por cada clase que vayamos a insertar un Mixin

		
		public static interface CazadorConId {

			@JsonIgnore
			abstract long getEdad();

		}
		
		@JsonPropertyOrder({ "nombrePerro", "chip", "raza", "sexo",
			"fechaNacimiento", "valoracion", "operativo", "observaciones", "nivelAdiestramiento", "observacionesPerro" })
		public static interface PerroConId {

			@JsonIgnore
			abstract Collection<String> getObservaciones();

		}
		
		

		/* public static interface Comision {

			@JsonProperty("inicioActivacion")
			abstract LocalDateTime getFechaActivacion();

			@JsonProperty("finActivacion")
			abstract LocalDateTime getFechaDesactivacion();

		} */

}
