import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: ['.menu a { color: #0000ff; font-family: Verdana, Geneva, Tahoma, sans-serif; }']
})
export class MenuComponent implements OnInit {

  user: string = '';
  passwd: string = '';
  faHome = faHome;
  isAutenticado: boolean = environment.autenticacion;

  constructor(private servicioAutenticacion: AutenticacionService) { }

  ngOnInit() {
  }

  autenticar(): void {
    this.isAutenticado = !this.servicioAutenticacion.autenticar(this.user, this.passwd);
  }

}
