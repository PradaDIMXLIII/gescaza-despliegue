import { Component, OnInit } from '@angular/core';
import { faAngrycreative, faNode } from '@fortawesome/free-brands-svg-icons';
import { faAngry } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styles: []
})
export class NotFoundComponent implements OnInit {

  faError = faAngry;

  constructor() { }

  ngOnInit() {
  }

}
