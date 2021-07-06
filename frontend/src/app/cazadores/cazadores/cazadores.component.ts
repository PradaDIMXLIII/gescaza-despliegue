import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cazador } from '../models/cazador';
import { CazadorService } from '../service/cazador-service';

@Component({
  selector: 'app-cazadores',
  templateUrl: './cazadores.component.html',
  styles: []
})
export class CazadoresComponent implements OnInit {
  cazadores: Cazador[] = [];
  cazadorVerDatos: Cazador;


  constructor(private cazadorService: CazadorService, private router: Router) { }

  ngOnInit(): void {
    this.cargarCazadores();
    //console.log(this.cazadores);
  }

  cargarCazadores() {
    this.cazadorService.getCazadores().subscribe((response) => {
      this.cazadores = this.cazadorService.extraerCazadores(response);
    });
   // console.log(this.cazadores);
  }

  verDatos(cazador: Cazador): void {
    this.cazadorVerDatos = cazador;
    //console.log(this.cazadorVerDatos);
  }

  onCazadorEliminar(cazador: Cazador): void {
    //console.log(`He eliminado a ${cazador.nombre}`);
    this.cazadorService.delete(cazador.cazadorId).subscribe(response => {
      //console.log(response);
      this.router.navigate(['cazadores']);
      location.reload();
    }
    );
  }

  nuevoCazador(): void {
    //cuando es un nuevo cazador se el pasa como parámetro y valor de id la letra N
    this.router.navigate(['cazadores/formulario/N']);
  }

  onCazadorEditar(cazador: Cazador): void {
    let url = `cazadores/formulario/${cazador.cazadorId}`;
    //console.log(url);
    //location.reload();
    this.router.navigate([url]);
  }
}
