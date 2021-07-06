import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Agenda } from "../models/agenda";
import { AgendaImpl } from "../models/agenda-impl";
import { EventoCaza } from "../models/evento-caza";
import { EventoCazaImpl } from "../models/evento-caza-impl";
import { Perro } from "../models/perro";
import { PerroImpl } from "../models/perro-impl";
import { PersonaInvitada } from "../models/persona-invitada";
import { PersonaInvitadaImpl } from "../models/persona-invitada-impl";
import { Punto } from "../models/punto";
import { PuntoImpl } from "../models/punto-impl";
import { TarjetaEvento } from "../models/tarjeta-evento";
import { TarjetaEventoImpl } from "../models/tarjeta-evento-impl";
import { ZonaMarcadaDelete } from "../models/zona-marcada-delete";
import { ZonaMarcadaImpl } from "../models/zona-marcada-impl";
import { Zonamarcada } from "../models/zonamarcada";

@Injectable({
  providedIn: 'root'
})

export class EventocazaService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}cazas`;
  private urlAgendas: string = `${this.host}agendas`;

  constructor(private http: HttpClient) { }

  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    //console.log(numId);
    return numId;
  }

  invitarEventoCaza(idTarjeta: string): Observable<any> {
    return this.http.get<any>(`${this.host}tarjetas/search/invitarEventoCaza?idTarjeta=${idTarjeta}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  updateInvitaciones(idTarjetaCazador: string, tarjeta: TarjetaEvento): Observable<any> {
    return this.http
      .put<any>(`${this.host}tarjetas/${idTarjetaCazador}`, tarjeta)
      .pipe(
        catchError((e) => {
          if (e.status === 400) {
            return throwError(e);
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }

  updateCazadorCazaInvitado(idCazador: string, personaInvitada: PersonaInvitada): Observable<any> {
    return this.http
      .put<any>(`${this.host}cazadores/${idCazador}`, personaInvitada)
      .pipe(
        catchError((e) => {
          if (e.status === 400) {
            return throwError(e);
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }

  getPersonasInvitadasEvento(idEvento: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${idEvento}/personasInvitadas`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  extraerPersonasInvitadasEvento(respuestaApi: any): PersonaInvitada[] {
    const personasInvitadas: PersonaInvitada[] = [];
    respuestaApi._embedded.cazadores.forEach(e => {
      personasInvitadas.push(this.mapearPersonaInvitada(e));
    });
    return personasInvitadas;
  }

  mapearPersonaInvitada(respuestaApi: any): PersonaInvitada {
    //console.log(eventoCazaApi);
    let personaInvitada: PersonaInvitada = new PersonaInvitadaImpl();
    personaInvitada.personaInvitadaId = this.getId(respuestaApi._links.cazador.href);
    personaInvitada.nombre = respuestaApi.nombre;
    personaInvitada.apellidos = respuestaApi.apellidos;
    personaInvitada.dni = respuestaApi.dni;
    personaInvitada.fechaNacimiento = respuestaApi.fechaNacimiento;
    personaInvitada.numSocio = respuestaApi.numSocio;
    personaInvitada.cotoCaza = respuestaApi.cotoCaza;
    personaInvitada.clubDeportivo = respuestaApi.clubDeportivo;
    personaInvitada.observaciones = respuestaApi.observaciones;
    personaInvitada.nucleoCinologicoHref = respuestaApi._links.nucleoCinologico.href;
    personaInvitada.tarjetasHref = respuestaApi._links.tarjetas.href;
    personaInvitada.armasHref = respuestaApi._links.armas.href;
    personaInvitada.cazaInvitadoHref = respuestaApi._links.cazaInvitado.href;
   // console.log(eventoCaza);
    return personaInvitada;
  }



  getPersonaInvitada(url: string): Observable<any> {
    return this.http.get<any>(`${url}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  extraerPersonaInvitada(respuestaApi: any): PersonaInvitada {
    const personaInvitada: PersonaInvitada = new PersonaInvitadaImpl();
    personaInvitada.personaInvitadaId = this.getId(respuestaApi._links.cazador.href);
    personaInvitada.nombre = respuestaApi.nombre;
    personaInvitada.apellidos = respuestaApi.apellidos;
    personaInvitada.dni = respuestaApi.dni;
    personaInvitada.fechaNacimiento = respuestaApi.fechaNacimiento;
    personaInvitada.numSocio = respuestaApi.numSocio;
    personaInvitada.cotoCaza = respuestaApi.cotoCaza;
    personaInvitada.clubDeportivo = respuestaApi.clubDeportivo;
    personaInvitada.observaciones = respuestaApi.observaciones;
    personaInvitada.nucleoCinologicoHref= respuestaApi._links.nucleoCinologico.href;
    personaInvitada.tarjetasHref = respuestaApi._links.tarjetas.href;
    personaInvitada.armasHref = respuestaApi._links.armas.href;
    personaInvitada.agendasHref = respuestaApi._links.agendas.href;
    personaInvitada.cazaInvitadoHref = respuestaApi._links.cazaInvitado.href;
    return personaInvitada;
  }

  getEventosCazaSeleccionado(idAgendaSelect: string): Observable<any> {
    return this.http.get<any>(`${this.host}agendas/${idAgendaSelect}/eventos`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  getEventosCaza(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  extraerEventosCaza(respuestaApi: any): EventoCaza[] {
    const eventosCaza: EventoCaza[] = [];
    respuestaApi._embedded.cazas.forEach(e => {
      eventosCaza.push(this.mapearEventoCaza(e));
    });
    console.log(eventosCaza);
    return eventosCaza;
  }

  mapearEventoCaza(eventoCazaApi: any): EventoCaza {
    //console.log(eventoCazaApi);
    let eventoCaza: EventoCaza = new EventoCazaImpl();
    eventoCaza.cazaId = this.getId(eventoCazaApi._links.self.href);
    eventoCaza.fechaEvento = eventoCazaApi.fechaEvento;
    eventoCaza.lugar = eventoCazaApi.lugar;
    eventoCaza.ciudad = eventoCazaApi.ciudad;
    eventoCaza.horaEvento = eventoCazaApi.horaEvento;
    eventoCaza.personasInvitadaHref = eventoCazaApi._links.personasInvitadas.href;
    eventoCaza.comentariosEvento = eventoCazaApi.comentariosEvento;
    eventoCaza.precinto = eventoCazaApi.precinto;
    eventoCaza.trofeo = eventoCazaApi.trofeo;
    eventoCaza.tipoCaza = eventoCazaApi.tipoCaza;
    eventoCaza.cotoCaza = eventoCazaApi.cotoCaza;
    eventoCaza.perrosCazaHref = eventoCazaApi._links.perrosCaza.href;
    eventoCaza.agendaHref = eventoCazaApi._links.agenda.href;
    eventoCaza.zonasMarcadasHref = eventoCazaApi._links.zonasMarcadas.href;
   // console.log(eventoCaza);
    return eventoCaza;
  }

  create(eventoCaza: EventoCaza): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, eventoCaza).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  delete(id: string): Observable<EventoCaza> {
    return this.http
      .delete<EventoCaza>(`${this.urlEndPoint}/${id}`)
      .pipe(
        catchError((e) => {
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }

  update(eventoCaza: EventoCaza): Observable<any> {
    return this.http
      .put<any>(`${this.urlEndPoint}/${eventoCaza.cazaId}`, eventoCaza)
      .pipe(
        catchError((e) => {
          if (e.status === 400) {
            return throwError(e);
          }
           if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }

  createAgenda(agenda: Agenda): Observable<any> {
    return this.http.post(`${this.host}agendas`, agenda).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  updateZonaCaza(url: string, zonaCaza: Zonamarcada): Observable<any> {
    return this.http
      .put<any>(`${url}`, zonaCaza)
      .pipe(
        catchError((e) => {
          if (e.status === 400) {
            return throwError(e);
          }
           if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }

  updateZonaCazaDelete(url: string, zonaCaza: ZonaMarcadaDelete): Observable<any> {
    return this.http
      .put<any>(`${url}`, zonaCaza)
      .pipe(
        catchError((e) => {
          if (e.status === 400) {
            return throwError(e);
          }
           if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }


  getEventoCaza(id: string): Observable<EventoCaza> {
    return this.http.get<EventoCaza>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  getZonasMarcadas(url: string): Observable<any> {
     return this.http.get<any>(url).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
   }

  extraerZonasMarcadas(respuestaApi: any): Zonamarcada[] {
    const zonasCaza: Zonamarcada[] = [];
    if (respuestaApi._embedded.zonacazas) {
    respuestaApi._embedded.zonacazas.forEach(e => {
      zonasCaza.push(this.mapearZonaCaza(e));
    });
  }
    return zonasCaza;
  }

  mapearZonaCaza(respuestaApi: any): Zonamarcada {
     const zonaMarcada: Zonamarcada = new ZonaMarcadaImpl();
     zonaMarcada.caza = this.getId(respuestaApi._links.self.href);
     zonaMarcada.nombre = respuestaApi.nombre;
     zonaMarcada.localidad = respuestaApi.localidad;
     zonaMarcada.provincia = respuestaApi.provincia;
     zonaMarcada.observacionesZona = respuestaApi.observacionesZona;
     zonaMarcada.coordLimitesZonaHref = respuestaApi._links.coordLimitesZona.href;
     zonaMarcada.itinerarioCazaHref = respuestaApi._links.itinerarioCaza.href;
     zonaMarcada.puntosImportantesHref = respuestaApi._links.puntosImportantes.href;
     return zonaMarcada;
  }

  getPuntos(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  extraerPuntos(respuestaApi: any): Punto[] {
    const puntos: Punto[] = [];
    respuestaApi._embedded.puntos.forEach(p => {
      puntos.push(this.mapearPunto(p));
    });
    return puntos;
  }

  mapearPunto(respuestaApi: any): Punto {
    const punto: Punto = new PuntoImpl();
    punto.coordLatitud = respuestaApi.coordLatitud;
    punto.coordLongitud = respuestaApi.coordLongitud;
    punto.puntoId = this.getId(respuestaApi._links.punto.href);
    return punto;
  }

  getPerros(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  extraerPerros(respuestaApi: any): Perro[] {
    const perros: Perro[] = [];
    respuestaApi._embedded.perros.forEach(p => {
      perros.push(this.mapearPerro(p));
    });
    return perros;
  }

  mapearPerro(respuestaApi: any): Perro {
    const perro: Perro = new PerroImpl();
    perro.perroId = this.getId(respuestaApi._links.perro.href);
    perro.nombrePerro = respuestaApi.nombrePerro;
    perro.observacionesPerro = respuestaApi.observacionesPerro;
    perro.nivelAdiestramiento = respuestaApi.nivelAdiestramiento;
    return perro;
  }

  getAgendas(): Observable<any> {
    return this.http.get<any>(this.urlAgendas).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  getTarjetasCazadorSeleccionado(idCazadorSelect: string): Observable<any> {
    return this.http.get<any>(`${this.host}cazadores/${idCazadorSelect}/tarjetas`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  getTarjeta(idTarjeta: string): Observable<any> {
    return this.http.get<any>(`${this.host}tarjetas/${idTarjeta}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  extraerTarjetas(respuestaApi: any): TarjetaEvento[] {
    const tarjetas: TarjetaEvento[] = [];
    respuestaApi._embedded.tarjetas.forEach(t => {
      tarjetas.push(this.mapearTarjeta(t));
    });
    return tarjetas;
  }

  mapearTarjeta(respuestaApi: any): TarjetaEvento {
    const tarjeta: TarjetaEvento = new TarjetaEventoImpl();
    tarjeta.tarjetaEventoId = this.getId(respuestaApi._links.tarjeta.href);
    tarjeta.nombre = respuestaApi.nombre;
    tarjeta.cotoCaza = respuestaApi.cotoCaza;
    tarjeta.fechaVencimiento = respuestaApi.fechaVencimiento;
    tarjeta.numInvitaciones = respuestaApi.numInvitaciones;
    return tarjeta;
  }

  getAgendasCazadorSeleccionado(idCazadorSelect: string): Observable<any> {
    return this.http.get<any>(`${this.host}cazadores/${idCazadorSelect}/agendas`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  extraerAgendas(respuestaApi: any): Agenda[] {
    const agendas: Agenda[] = [];
    respuestaApi._embedded.agendas.forEach(a => {
      agendas.push(this.mapearAgenda(a));
    });
    return agendas;
  }

  mapearAgenda(respuestaApi: any): Agenda {
    const agenda: Agenda = new AgendaImpl();
    agenda.agendaId = this.getId(respuestaApi._links.agenda.href);
    agenda.anyo = respuestaApi.anyo;
    agenda.nombre = respuestaApi.nombre;
    agenda.cazadorHref = respuestaApi._links.cazador.href;
    return agenda;
  }

}
