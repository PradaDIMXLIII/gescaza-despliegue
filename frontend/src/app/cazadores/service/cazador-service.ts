import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { Arma } from "../models/arma";
import { ArmaImpl } from "../models/arma-impl";
import { Cazador } from "../models/cazador";
import { CazadorImpl } from "../models/cazador-impl";
import { NucleoCinologico } from "../models/nucleo-cinologico";
import { NucleoCinologicoImpl } from "../models/nucleo-cinologico-impl";
import { Tarjeta } from "../models/tarjeta";
import { TarjetaImpl } from "../models/tarjeta-impl";

@Injectable({
  providedIn: 'root'
})
export class CazadorService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}cazadores`;

  constructor(private http: HttpClient) { }

  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    //console.log(numId);
    return numId;
  }

  getCazadores(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerCazadores(respuestaApi: any): Cazador[] {
    const cazadores: Cazador[] = [];
    respuestaApi._embedded.cazadores.forEach(c => {
      cazadores.push(this.mapearCazador(c));
    });
    //console.log(cazadores);
    return cazadores;
  }

  mapearCazador(cazadorApi: any): Cazador {
    //console.log(cazadorApi);
    let cazador: Cazador = new CazadorImpl();
    cazador.cazadorId = this.getId(cazadorApi._links.cazador.href);
    cazador.nombre = cazadorApi.nombre;
    cazador.apellidos = cazadorApi.apellidos;
    cazador.dni = cazadorApi.dni;
    cazador.fechaNacimiento = cazadorApi.fechaNacimiento;
    cazador.numSocio = cazadorApi.numSocio;
    cazador.cotoCaza = cazadorApi.cotoCaza;
    cazador.clubDeportivo = cazadorApi.clubDeportivo;
    cazador.observaciones = cazadorApi.observaciones;
    cazador.nucleoCinologicoHref = cazadorApi._links.nucleoCinologico.href;
    cazador.tarjetasHref = cazadorApi._links.tarjetas.href;
    cazador.armasHref = cazadorApi._links.armas.href;
    //cazador.cazaInvitado = cazadorApi._links.cazaInvitado.href;
    // console.log(cazador);
    return cazador;
  }

  create(cazador: Cazador): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, cazador).pipe(
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

  delete(id: string): Observable<Cazador> {
    return this.http
      .delete<Cazador>(`${this.urlEndPoint}/${id}`)
      .pipe(
        catchError((e) => {
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }

  update(cazador: Cazador): Observable<any> {
    return this.http
      .put<any>(`${this.urlEndPoint}/${cazador.cazadorId}`, cazador)
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

 
  getCazador(id: string): Observable<Cazador> {
    return this.http.get<Cazador>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  getNucleoCinologicoCazador(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  extraerNucleoCinologico(respuestaApi: any): NucleoCinologico {
    const nucleoCinologico: NucleoCinologico = new NucleoCinologicoImpl();
    nucleoCinologico.numRegistro = respuestaApi.numRegistro;
    nucleoCinologico.nombre = respuestaApi.nombre;
    nucleoCinologico.animalesHref = respuestaApi._links.animales.href;
    return nucleoCinologico;
  }

  getArmasCazador(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  extraerArmasCazador(respuestaApi: any): Arma[] {
    const armas: Arma[] = [];
    respuestaApi._embedded.armas.forEach(a => {
      armas.push(this.mapearArma(a));
    });
    //console.log(armas);
    return armas;
  }

  mapearArma(armaApi: any): Arma {
    //console.log(armaApi);
    let arma: Arma = new ArmaImpl();
    arma.nombre = armaApi.nombre;
    arma.calibre = armaApi.calibre;
    arma.guia = armaApi.guia;
    arma.descripcion = armaApi.descripcion;
    //console.log(arma);
    return arma;
  }

  getTarjetasCazador(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  extraerTarjetasCazador(respuestaApi: any): Tarjeta[] {
    const tarjetas: Tarjeta[] = [];
    respuestaApi._embedded.tarjetas.forEach(t => {
      tarjetas.push(this.mapearTarjeta(t));
    });
    //console.log(cazadores);
    return tarjetas;
  }

  mapearTarjeta(tarjetaApi: any): Tarjeta {
    //console.log(armaApi);
    let tarjeta: Tarjeta = new TarjetaImpl();
    tarjeta.nombre = tarjetaApi.nombre;
    tarjeta.cotoCaza = tarjetaApi.cotoCaza;
    tarjeta.fechaVencimiento = tarjetaApi.fechaVencimiento;
    tarjeta.numInvitaciones = tarjetaApi.numInvitaciones;
    // console.log(arma);
    return tarjeta;
  }
}
