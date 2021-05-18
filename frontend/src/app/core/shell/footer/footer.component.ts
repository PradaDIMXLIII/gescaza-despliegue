import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub, faGitlab, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  faCorreo = faEnvelope;
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faFacebook = faFacebook;

  constructor() { }

  ngOnInit() {
  }

}
