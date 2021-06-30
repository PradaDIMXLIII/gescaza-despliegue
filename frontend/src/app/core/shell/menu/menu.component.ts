import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faLandmark, faLink } from '@fortawesome/free-solid-svg-icons';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
  .menu a {
    color: #0000ff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

  .sidebar {
  position: fixed;
  width: 9%;
  height: 100vh;
  background: #422f6a;
  margin: 20px;
  font-size: 0.90em;
}

.nav {
  position: relative;
  margin: 0 10%;
  text-align: left;
  top: 40%;
  transform: translateY(-50%);
}

hr {
  color: red;
  background-image: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
}

.nav ul {
  line-height: 3;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  li {
    position: left;

    a {
      list-style-type: circle;
      line-height: 5em;
      font-size: 18px;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.4em;
      color: rgba(#FFF, 0.35);
      display: block;
      transition: all ease-out 300ms;
    }

    &.active a {
      color: white;
    }

    &:not(.active)::after {
      opacity: 0.2;
    }

    &:not(.active):hover a {
      color: rgba(#FFF, 0.75);
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.2em;
      background: black;
      left: 0;
      bottom: 0;
    }
  }
}

  `]
})
export class MenuComponent implements OnInit {

  user: string = '';
  passwd: string = '';
  faHome = faHome;
  isAutenticado: boolean = environment.autenticacion;
  faLink = faLandmark;
  faCorreo = faEnvelope;
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faFacebook = faFacebook;

  constructor(private servicioAutenticacion: AutenticacionService) { }

  ngOnInit() {
  }

  autenticar(): void {
    //this.isAutenticado = !this.servicioAutenticacion.autenticar(this.user, this.passwd);
  }

}
