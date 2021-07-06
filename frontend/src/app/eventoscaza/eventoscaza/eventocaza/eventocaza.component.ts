import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { EventoCaza } from '../../models/evento-caza';
import { Perro } from '../../models/perro';
import { PersonaInvitada } from '../../models/persona-invitada';
import { Zonamarcada } from '../../models/zonamarcada';
import { EventocazaService } from '../../service/eventocaza-service';

@Component({
  selector: 'app-eventocaza',
  templateUrl: './eventocaza.component.html',
  styles: []
})
export class EventocazaComponent implements OnInit {
  @Input() eventoCaza: EventoCaza;
  @Input() personasInvitadas: PersonaInvitada[];
  @Input() zonasMarcadas: Zonamarcada[];
  @Input() perros: Perro[];
  @Output() eventoCazaEliminar = new EventEmitter<EventoCaza>();
  @Output() eventoCazaEditar = new EventEmitter<EventoCaza>();
  faPerro = faDog;
  
  constructor(private eventoCazaService: EventocazaService) { }

  ngOnInit() {
  }

 cogerFechaEvento(): string {
    let fecha: string = this.eventoCaza.fechaEvento.slice(0, 10);
    return fecha;
  }

  eliminar(): void {
    if (confirm("¿Está seguro?")) {
      this.eventoCazaEliminar.emit(this.eventoCaza);
    }
  }

  editar(): void {
    this.eventoCazaEditar.emit(this.eventoCaza);
  }

}
