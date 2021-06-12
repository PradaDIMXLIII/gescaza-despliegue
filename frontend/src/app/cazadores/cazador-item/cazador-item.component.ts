import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Cazador } from '../models/cazador';
import { CazadorImpl } from '../models/cazador-impl';

@Component({
  selector: 'app-cazador-item',
  templateUrl: './cazador-item.component.html',
  styles: []
})
export class CazadorItemComponent implements OnInit {
  @Input() cazador: Cazador;
  @Output() cazadorSeleccionado = new EventEmitter<Cazador>();
  faUser = faUser;

  constructor() { }

  ngOnInit() {
  }

  seleccionarCazador(cazador: Cazador):void {
    this.cazadorSeleccionado.emit(cazador);
  }

}
