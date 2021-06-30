import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
  .jumbotron {
    padding: 5px;
    margin: 1px;
    background-image: url('./assets/lobo.jpg');
    background-color: transparent;
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: contain;
  }

  div a img {
    background-color: inherit;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 35%;
    height: 35%;
    border-radius: 20px;
  }

  #widget {
    width: 30%;
    height: 30%;
  }

  img.logo:hover {
    transform: scaleX(-1);
  }

  .examen {
    text-align: center;
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
  }`
  ]
})
export class HeaderComponent implements OnInit {

  title = environment.appName;
  autor = environment.appAuthor;
  date: Date;
  fecha: String;


  constructor() { }

  ngOnInit() {
    this.date = new Date();
    this.fecha = this.date.toLocaleDateString();
  }

}
