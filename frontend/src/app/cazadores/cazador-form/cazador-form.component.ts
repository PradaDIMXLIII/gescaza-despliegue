import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cazador } from '../models/cazador';
import { CazadorImpl } from '../models/cazador-impl';
import { CazadorService } from '../service/cazador-service';

@Component({
  selector: 'app-cazador-form',
  templateUrl: './cazador-form.component.html',
  styles: []
})
export class CazadorFormComponent implements OnInit {
  cazador: Cazador = new CazadorImpl();
  boton: boolean = true;

  constructor(private cazadorService: CazadorService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.cargarCazador() != 'N') {
      //console.log('estoy en cargarCazador');
      this.boton = false;
      let id: string = this.cargarCazador();
      this.cazadorService.getCazador(id).subscribe(response => {
        this.cazador = this.cazadorService.mapearCazador(response);
        this.actualizarFechaInv();
      }
       );
    }
  }

  actualizarFechaInv() {
    let fechaCazador = this.cazador.fechaNacimiento;
    let fechaActualizadaInv = fechaCazador.slice(6,10) + "-" + fechaCazador.slice(3,5) + "-" + fechaCazador.slice(0,2);
    this.cazador.fechaNacimiento = fechaActualizadaInv;
    console.log(this.cazador.fechaNacimiento);
  }

  actualizarFecha(): string {
    let fechaCazador = this.cazador.fechaNacimiento;
    let fechaActualizada = fechaCazador.slice(8,10) + "-" + fechaCazador.slice(5,7) + "-" + fechaCazador.slice(0,4) + " 00:00:00";
    return fechaActualizada;
  }

  create(): void {
    this.cazador.fechaNacimiento = this.actualizarFecha();
    console.log(this.cazador.fechaNacimiento);
    this.cazadorService.create(this.cazador).subscribe((response) => {
      //console.log(`He creado el cazador ${this.cazador.nombre}`);
      this.router.navigate(['/cazadores']);
    });
  }

  cargarCazador(): string {
    const idBarraNavegacion: string = this.activateRoute.snapshot.params['id'];
    //console.log(idBarraNavegacion);
    return idBarraNavegacion;
  }

  actualizar(): void {
    this.cazador.fechaNacimiento = this.actualizarFecha();
    this.cazadorService.update(this.cazador).subscribe((response) => {
      console.log(`He actualizado el cazador ${this.cazador.nombre}`);
      this.router.navigate(['/cazadores']);
    })
  }

}
