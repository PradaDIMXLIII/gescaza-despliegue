import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoscazaRoutingModule } from './eventoscaza-routing.module';
import { EventoscazaComponent } from './eventoscaza/eventoscaza.component';
import { EventocazaFormComponent } from './eventocaza-form/eventocaza-form.component';
import { EventocazaComponent } from './eventoscaza/eventocaza/eventocaza.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EventoscazaComponent, EventocazaFormComponent, EventocazaComponent],
  imports: [
    CommonModule,
    EventoscazaRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class EventoscazaModule { }
