import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Arma } from '../../models/arma';
import { Cazador } from '../../models/cazador';;
import { NucleoCinologico } from '../../models/nucleo-cinologico';
import { Tarjeta } from '../../models/tarjeta';
import { CazadorService } from '../../service/cazador-service';

@Component({
  selector: 'app-cazador',
  templateUrl: './cazador.component.html',
  styles: []
})
export class CazadorComponent implements OnInit {
  @Input() cazador: Cazador;
  @Output() cazadorEliminar = new EventEmitter<Cazador>();
 // @Output() cazadorSeleccionado = new EventEmitter<Cazador>();
  @Output() cazadorEditar = new EventEmitter<Cazador>();
  faUser = faUser;

  nucleoCinologico: NucleoCinologico;
  armas: Arma[] = [];
  tarjetas: Tarjeta[] = [];



  constructor(private cazadorService: CazadorService) { }

  ngOnInit():void {
    //console.log(this.cazador);
    this.cargarDatosCazador();
   // this.cogerFechaNacimiento();
  }

  cogerFechaNacimiento():string {
    let fecha: string = this.cazador.fechaNacimiento.slice(0, 10);
    return fecha;
  }

  eliminar():void {
    this.cazadorEliminar.emit(this.cazador);
  }

  editar():void {
    this.cazadorEditar.emit(this.cazador);
  }

  cargarDatosCazador():void {
    this.cargarNucleoCinologico();
    this.cargarArmas();
    this.cargarTarjetas();
  }

  cargarNucleoCinologico(): void{
   // console.log(this.cazador);
    this.cazadorService.getNucleoCinologicoCazador(this.cazador.nucleoCinologicoHref).subscribe((response) =>
    this.nucleoCinologico = this.cazadorService.extraerNucleoCinologico(response));
    //console.log(this.nucleoCinologico);
  }

  cargarArmas(): void {
    this.cazadorService.getArmasCazador(this.cazador.armasHref).subscribe((response) =>
    this.armas = this.cazadorService.extraerArmasCazador(response));
    //console.log(this.armas);
  }

  cargarTarjetas(): void {
    this.cazadorService.getTarjetasCazador(this.cazador.tarjetasHref).subscribe((response) =>
    this.tarjetas = this.cazadorService.extraerTarjetasCazador(response));
    //console.log(this.tarjetas);
  }

}
