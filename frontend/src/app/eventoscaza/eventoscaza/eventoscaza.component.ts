import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Cazador } from 'src/app/cazadores/models/cazador';
import { CazadorService } from 'src/app/cazadores/service/cazador-service';
import { environment } from 'src/environments/environment';
import { Agenda } from '../models/agenda';
import { AgendaImpl } from '../models/agenda-impl';
import { EventoCaza } from '../models/evento-caza';
import { Perro } from '../models/perro';
import { PersonaInvitada } from '../models/persona-invitada';
import { ZonaMarcadaDelete } from '../models/zona-marcada-delete';
import { ZonaMarcadaDeleteImpl } from '../models/zona-marcada-delete-impl';
import { Zonamarcada } from '../models/zonamarcada';
import { EventocazaService } from '../service/eventocaza-service';

@Component({
  selector: 'app-eventoscaza',
  templateUrl: './eventoscaza.component.html',
  styles: []
})
export class EventoscazaComponent implements OnInit {
  private host: string = environment.host;
  private urlZonaCaza: string = `${this.host}zonacazas`;
  eventosCaza: EventoCaza[] = [];
  eventoCazaVerDatos: EventoCaza;
  faEvento = faCalendar;
  zonasCaza: Zonamarcada[] = [];
  cazadores: Cazador[] = [];
  agendas: Agenda[] = [];
  idCazadorSeleccionado: string = " ";
  idAgendaSeleccionada: string = " ";
  zonaCazaVerificar: Zonamarcada;
  zonaCazaDelete: ZonaMarcadaDelete = new ZonaMarcadaDeleteImpl();
  anyoAgenda: string;
  nombreAgenda: string = " ";
  agenda: Agenda = new AgendaImpl();
  personasInvitadasEvento: PersonaInvitada[] = [];
  zonasMarcadasEvento: Zonamarcada[] = [];
  perrosEvento: Perro[] = [];


  constructor(private eventoCazaService: EventocazaService, private router: Router,
    private cazadorService: CazadorService) { }

  ngOnInit(): void {
    //this.cargarEventosCaza();
    this.cargarCazadores();
    //this.extraerZonasCaza(this.urlZonaCaza);
    //console.log(this.eventosCaza);
  }

  hoy(): Date {
    return new Date();
  }

  ordenarEventosCaza():void {
    if (this.eventosCaza.length > 0) {
      this.eventosCaza.sort((a, b) => {
        return (a.fechaEvento > b.fechaEvento ? 1: a.fechaEvento < b.fechaEvento ? -1 : 0);  
      });
    }    
  }

  crearAgenda():void {
    this.agenda.nombre = this.nombreAgenda;
    this.agenda.anyo = this.anyoAgenda;
    if (this.idCazadorSeleccionado == " ") {
      alert('Debe Seleccionar un cazador');
    }else {
        this.agenda.cazador = `${this.host}cazadores/${this.idCazadorSeleccionado}`;
        this.eventoCazaService.createAgenda(this.agenda).subscribe((response) => {
        location.reload();
        this.router.navigate(['/eventoscaza']);
      });
    }
  }

  cargarAgendasCazador(){
    this.agendas = [];
    this.eventosCaza = [];
    this.eventoCazaService.getAgendasCazadorSeleccionado(this.idCazadorSeleccionado).subscribe((response) => {
      this.agendas = this.eventoCazaService.extraerAgendas(response);
     // console.log(this.agendas);
    });
  }


  cargarCazadores() {
    this.cazadorService.getCazadores().subscribe((response) => {
      this.cazadores = this.cazadorService.extraerCazadores(response);
    });
    //console.log(this.cazadores);
  }

  filtrarEventosPorAgenda(): void {
   // console.log(`agenda seleccionada ${this.idAgendaSeleccionada}`);
    this.eventosCaza = [];
    this.eventoCazaService.getEventosCazaSeleccionado(this.idAgendaSeleccionada).subscribe((response) => {
      this.eventosCaza = this.eventoCazaService.extraerEventosCaza(response);
     // console.log(this.eventosCaza);
    });    
    //console.log(this.eventosCaza);
    setTimeout(()=> {
      this.ordenarEventosCaza();
      if (this.eventosCaza.length == 0) {
      alert('NO EXISTEN EVENTOS EN ESTA AGENDA');
    }
    }, 500);
    
  }

   cargarEventosCaza() {
    this.eventoCazaService.getEventosCaza().subscribe((response) => {
      this.eventosCaza = this.eventoCazaService.extraerEventosCaza(response);
    });
   // console.log(this.eventosCaza);
  }

  verDatos(eventoCaza: EventoCaza): void {
    this.eventoCazaVerDatos = eventoCaza;
    this.cargarPersonasInvitadas();
    this.cargarPerrosCazaEvento();
   // this.cargarZonasCazaEvento();
  }

  cargarPersonasInvitadas() {
    this.personasInvitadasEvento = [];
    try {
        this.eventoCazaService.getPersonasInvitadasEvento(this.eventoCazaVerDatos.cazaId).subscribe((response) => {
             this.personasInvitadasEvento = this.eventoCazaService.extraerPersonasInvitadasEvento(response);
             
        });
        
    } catch (error) {
      console.log(error);
    }
  }

  cargarZonasCazaEvento() {
    this.zonasMarcadasEvento = [];
    this.eventoCazaService.getZonasMarcadas(this.eventoCazaVerDatos.zonasMarcadasHref).subscribe((response) => {
      this.zonasMarcadasEvento = this.eventoCazaService.extraerZonasMarcadas(response);
    });
  }

  cargarPerrosCazaEvento() {
    this.perrosEvento = [];
    this.eventoCazaService.getPerros(this.eventoCazaVerDatos.perrosCazaHref).subscribe((response) => {
      this.perrosEvento = this.eventoCazaService.extraerPerros(response);
    });
  }


  onEventoCazaEliminar(eventoCaza: EventoCaza): void {
    console.log(`He eliminado a ${eventoCaza.tipoCaza}`);
    this.comprobarZonaCaza(eventoCaza);
    this.eventoCazaService.delete(eventoCaza.cazaId).subscribe(response => {
      console.log(response);
      this.router.navigate(['eventoscaza']);
      location.reload();
    }
    );
  }

  extraerZonasCaza(url: string): void {
    //console.log('estoy en extraerZonasCaza');
   // console.log(url);
    this.eventoCazaService.getZonasMarcadas(url).subscribe((response) => {
      console.log(response);
      this.zonasCaza = this.eventoCazaService.extraerZonasMarcadas(response);
    });
    //console.log(this.zonasCaza);
  }


  comprobarZonaCaza(eventoCaza: EventoCaza): void {
    //console.log('estoy en comprobarZonaCaza');
    const idEventoCaza: string = eventoCaza.cazaId;
   // console.log(this.zonasCaza);
   // console.log(idEventoCaza);
    this.zonasCaza.forEach((z) => {
      if (z.caza == idEventoCaza) {
        console.log(z.caza);
        this.zonaCazaDelete.localidad = z.localidad;
        this.zonaCazaDelete.nombre = z.nombre;
        this.zonaCazaDelete.provincia = z.provincia;
        this.zonaCazaDelete.observacionesZona = z.observacionesZona;
        this.zonaCazaDelete.caza = " ";
        this.zonaCazaVerificar = z;
        this.eliminarZonaCazadelEventoCaza(`${this.host}zonacazas/${eventoCaza.cazaId}`, this.zonaCazaDelete)
       // console.log(this.zonaCazaVerificar);
       // console.log(this.zonaCazaDelete);
      }
    });
  }

  eliminarZonaCazadelEventoCaza(url: string, zonaCaza: ZonaMarcadaDelete): void{
    //console.log(url);
    this.eventoCazaService.updateZonaCazaDelete(url, zonaCaza).subscribe(response => {
      console.log(response);
    });
  }

  nuevoEventoCaza(): void {
    //cuando es un nuevo cazador se el pasa como parámetro y valor de id la letra N
    this.router.navigate(['eventoscaza/formulario/N']);
  }

  onEventoCazaEditar(eventoCaza: EventoCaza): void {
    let url = `eventoscaza/formulario/${eventoCaza.cazaId}`;
    //console.log(url);
    //location.reload();
    this.router.navigate([url]);
  }

  cogerFechaEvento(eventoCaza: EventoCaza):string {
    let fecha: string = eventoCaza.fechaEvento.slice(0, 10);
    return fecha;
  }

}
