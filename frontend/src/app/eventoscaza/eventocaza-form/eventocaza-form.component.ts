import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cazador } from 'src/app/cazadores/models/cazador';
import { CazadorImpl } from 'src/app/cazadores/models/cazador-impl';
import { CazadorService } from 'src/app/cazadores/service/cazador-service';
import { environment } from 'src/environments/environment';
import { Agenda } from '../models/agenda';
import { EventoCaza } from '../models/evento-caza';
import { EventoCazaImpl } from '../models/evento-caza-impl';
import { TarjetaEvento } from '../models/tarjeta-evento';
import { TarjetaEventoImpl } from '../models/tarjeta-evento-impl';
import { EventocazaService } from '../service/eventocaza-service';

@Component({
  selector: 'app-eventocaza-form',
  templateUrl: './eventocaza-form.component.html',
  styles: []
})
export class EventocazaFormComponent implements OnInit {
  eventoCaza: EventoCaza = new EventoCazaImpl();
  boton: boolean = true;
  personaInvitada: Cazador = new CazadorImpl();
  cazador: Cazador = new CazadorImpl();
  cazadores: Cazador[] = [];
  agendas: Agenda[] = [];
  tarjetas: TarjetaEvento[] = [];
  tarjetaSeleccionada: TarjetaEvento = new TarjetaEventoImpl();
  eventosDeCaza: EventoCaza[] = [];
  idEventoCaza: string = " ";
  idCazadorSeleccionado: string = " ";
  idPersonaInvitada: string  = " ";
  idAgendaSeleccionada: string = " ";
  idBarraNavegacion: string = " ";
  cotoCazaSeleccionado: string;
  idTarjetaSeleccionada: string = " ";
  isNoInvitar: boolean = true;
  url: string = environment.host;
  resultadoInvitar: boolean;
  textoResultadoInvitar: string = " ";
  invitacionRealizada: boolean = false;

  constructor(private eventoCazaService: EventocazaService, private router: Router,
    private activateRoute: ActivatedRoute, private cazadorService: CazadorService) { }


  ngOnInit(): void {
    this.cargarCazadores();
    this.actualizarSelect();
   this.cargarIdEventoCaza();
    if (this.idBarraNavegacion != 'N') {
      // en el caso de que se edite un EVENTO
      //console.log('estoy en cargarEventoCaza');
      this.boton = false;
      this.idEventoCaza = this.idBarraNavegacion;
      this.eventoCazaService.getEventoCaza(this.idEventoCaza).subscribe(response => {
        this.eventoCaza = this.eventoCazaService.mapearEventoCaza(response);
        setTimeout(()=> {
              this.actualizarFechaInv();
              this.idAgendaSeleccionada = this.eventoCazaService.getId(this.eventoCaza.agendaHref);
        }, 500);
      }
       );
    }
  }

  actualizarSelect(): void {
    if (this.boton) {
      //Crear Evento
      this.eventoCaza.tipoCaza = "CAZA MENOR -al salto-";
      this.eventoCaza.precinto ="SIN PRECINTO";
      this.eventoCaza.cotoCaza = "CALATAYUD";
    } 
  }

  verificarInvitacion(){
    if (this.idCazadorSeleccionado == this.idPersonaInvitada || this.tarjetaSeleccionada.numInvitaciones <= 0
      || this.tarjetas.length == 0 || this.idPersonaInvitada == " " || this.idTarjetaSeleccionada == " ") {
      this.isNoInvitar = true;
      alert("!! ERROR !! (Analice las posibles causas:) \n *El cazador y la persona invitada NO pueden ser iguales. \n *Tiene que seleccionar una Persona Invitada \n *Tiene que seleccionar una Tarjeta de Invitacion \n *El número de invitaciones de la Tarjeta debe ser mayor que CERO \n *Tiene que existir una Tarjeta de Invitación");
    } else {
      this.isNoInvitar = false;
    }
  }

  invitar(idTarjetaSelect: string): void {
    this.invitacionRealizada = false;
    this.resultadoInvitar = false;
    this.textoResultadoInvitar = " ";
    //console.log(`tarjeta seleccionada ${idTarjetaSelect}`);
    this.eventoCazaService.invitarEventoCaza(idTarjetaSelect).subscribe((response) => {
        this.resultadoInvitar = response;
        //console.log(this.resultadoInvitar);
        this.textoResultadoInvitar = "CORRECTO";
        this.invitacionRealizada = true;
    });
     // console.log('estoy en this.resultadoinvitar');
    setTimeout(()=> {
      this.getTarjetaSeleccionada(idTarjetaSelect);
      setTimeout(() => {
          this.actualizarInvitaciones(idTarjetaSelect, this.tarjetaSeleccionada);
          this.actualizarPersonaInvitada();
          this.cargarTarjetasCazador();
      }, 1000);
      
    }, 500);
}

  actualizarInvitaciones(idTarjetaCazador: string, tarjeta: TarjetaEvento): void {
        tarjeta.numInvitaciones = tarjeta.numInvitaciones - 1;
        this.eventoCazaService.updateInvitaciones(idTarjetaCazador, tarjeta).subscribe((response) => {
         // console.log(response);
        });
  }

  getTarjetaSeleccionada(idTarjeta: string): void {
   // console.log(`id tarjeta en getTarjetaSeleccionada ${idTarjeta}`);
    this.tarjetaSeleccionada = new TarjetaEventoImpl();
    this.eventoCazaService.getTarjeta(idTarjeta).subscribe((response) => {
      //console.log(`response getTarjetaSeleccionada ${response.nombre}`);
      this.tarjetaSeleccionada = this.eventoCazaService.mapearTarjeta(response);
     // console.log(`tarjeta seleccionada ${this.tarjetaSeleccionada.nombre}`)
    });
  }

  cargarTarjetasCazador():void {
    this.tarjetas = [];
    console.log(`cazador seleccionado ${this.idCazadorSeleccionado}`);
    this.eventoCazaService.getTarjetasCazadorSeleccionado(this.idCazadorSeleccionado).subscribe((response) => {
      this.tarjetas = this.eventoCazaService.extraerTarjetas(response);
    });
    this.cargarAgendasCazador();
  }

  cargarAgendasCazador():void {
    this.agendas = [];
    this.eventoCazaService.getAgendasCazadorSeleccionado(this.idCazadorSeleccionado).subscribe((response) => {
      this.agendas = this.eventoCazaService.extraerAgendas(response);
    })
  }

  actualizarPersonaInvitada(): void {
    console.log(`id persona invitada ${this.idPersonaInvitada}`);
    //let urlPersonaInvitada = `${this.url}cazadores/${this.idPersonaInvitada}`;
    this.cazadorService.getCazador(this.idPersonaInvitada).subscribe((response)=> {
        this.personaInvitada = this.cazadorService.mapearCazador(response);
       // console.log(`this.personaInvitada ${this.personaInvitada.nombre}`);
    });
    //console.log(`idEventoCaza ${this.idEventoCaza}`);
    this.personaInvitada.cazaInvitado = `${this.url}cazas/${this.idEventoCaza}`;
   // console.log(`this.personaInvitada.cazaInvitado ${this.personaInvitada}`);
    setTimeout(() => {
        this.cazadorService.update(this.personaInvitada).subscribe((response)=> {
         // console.log(response);
        });
    }, 500);
  }

  actualizarAgendaSeleccionada() {
    this.eventoCaza.agenda = `${this.url}agendas/${this.idAgendaSeleccionada}`;
    this.eventoCaza.agendaHref = `${this.url}agendas/${this.idAgendaSeleccionada}`;
  }

  cargarCazadores() {
    this.cazadorService.getCazadores().subscribe((response) => {
      this.cazadores = this.cazadorService.extraerCazadores(response);
    });
   // console.log(this.cazadores);
  }

  cargarEventosDeCaza() {
    this.eventoCazaService.getEventosCaza().subscribe((response) => {
      this.eventosDeCaza = this.eventoCazaService.extraerEventosCaza(response);
    });
  }

  cargarAgendas() {
    this.eventoCazaService.getAgendas().subscribe((response) => {
      this.agendas = this.eventoCazaService.extraerAgendas(response);
    });
    //console.log(this.agendas);
  }

  actualizarFechaInv() {
    let fechaEventoCaza = this.eventoCaza.fechaEvento;
    let fechaActualizadaInv = fechaEventoCaza.slice(6,10) + "-" + fechaEventoCaza.slice(3,5) + "-" + fechaEventoCaza.slice(0,2);
    this.eventoCaza.fechaEvento = fechaActualizadaInv;
   // console.log(this.eventoCaza.fechaEvento);
  }

  actualizarFecha(): string {
    let fechaEventoCaza = this.eventoCaza.fechaEvento;
    let fechaActualizada = fechaEventoCaza.slice(8,10) + "-" + fechaEventoCaza.slice(5,7) + "-" + fechaEventoCaza.slice(0,4) + " 00:00:00";
    return fechaActualizada;
  }
  
  previoCreateUpdate():void {
    this.actualizarAgendaSeleccionada();
    this.eventoCaza.fechaEvento = this.actualizarFecha();
  }

  resetearValores():void {
    this.idPersonaInvitada = " ";
    this.idCazadorSeleccionado = " ";
    this.idAgendaSeleccionada = " ";
    this.idTarjetaSeleccionada = " ";
    this.idEventoCaza = " ";
  }
  
  create(): void {
    this.previoCreateUpdate();
    console.log(this.eventoCaza.agenda);
    console.log(this.eventoCaza.fechaEvento);
    setTimeout(()=> {
          this.eventoCazaService.create(this.eventoCaza).subscribe((response) => {
                console.log("He creado el evento de caza");
                console.log(this.eventoCaza);
                this.router.navigate(['/eventoscaza']);
              });
    }, 1000);
    this.resetearValores();
  }

  cargarIdEventoCaza(): void {
   this.idBarraNavegacion = this.activateRoute.snapshot.params['id'];
    //console.log(idBarraNavegacion);
  }

  actualizar(): void {
    this.previoCreateUpdate();
    setTimeout(()=> {
        this.eventoCazaService.update(this.eventoCaza).subscribe((response) => {
              //console.log(response);
             // console.log(`He actualizado el cazador ${this.eventoCaza.tipoCaza}`);
              this.router.navigate(['/eventoscaza']);
            });
            setTimeout(()=> {
              this.resetearValores();
            }, 500);
    }, 500);
    
  }
}
