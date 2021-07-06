import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Arma } from '../../models/arma';
import { Cazador } from '../../models/cazador';;
import { NucleoCinologico } from '../../models/nucleo-cinologico';
import { NucleoCinologicoImpl } from '../../models/nucleo-cinologico-impl';
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
  @Output() cazadorEditar = new EventEmitter<Cazador>();
  faUser = faUser;

  nucleoCinologico: NucleoCinologico;
  armas: Arma[] = [];
  tarjetas: Tarjeta[] = [];



  constructor(private cazadorService: CazadorService) { }

  ngOnInit() {
  }


  cogerFecha(fechaParametro: string):string {
    let fecha: string = fechaParametro.slice(0, 10);
    return fecha;
  }

  eliminar():void {
    if (confirm('¿Está seguro?')) {
      this.cazadorEliminar.emit(this.cazador);
    }
  }

  editar():void {
    this.cazadorEditar.emit(this.cazador);
  }


  cargarNucleoCinologico(cazador: Cazador): void{
  this.nucleoCinologico = new NucleoCinologicoImpl();
  this.nucleoCinologico.nombre = " ";
  setTimeout(()=> {
      this.cazadorService.getNucleoCinologicoCazador(cazador.nucleoCinologicoHref).subscribe((response) => {
      this.nucleoCinologico = this.cazadorService.extraerNucleoCinologico(response);
  });
   
  }, 500);
}

  

  cargarArmas(cazador: Cazador): void {
    this.armas = [];
    this.cazadorService.getArmasCazador(cazador.armasHref).subscribe((response) => {
      this.armas = this.cazadorService.extraerArmasCazador(response);
  });   
  }

  cargarTarjetas(cazador: Cazador): void {
    this.tarjetas = [];
    this.cazadorService.getTarjetasCazador(cazador.tarjetasHref).subscribe((response) => {
    this.tarjetas = this.cazadorService.extraerTarjetasCazador(response)
  }); 
  }

}
