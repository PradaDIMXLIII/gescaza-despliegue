import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CazadoresRoutingModule } from './cazadores-routing.module';
import { CazadoresComponent } from './cazadores/cazadores.component';
import { CazadorComponent } from './cazadores/cazador/cazador.component';
import { CazadorItemComponent } from './cazador-item/cazador-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CazadorFormComponent } from './cazador-form/cazador-form.component';


@NgModule({
  declarations: [CazadoresComponent, CazadorComponent, CazadorItemComponent, CazadorFormComponent],
  imports: [
    CommonModule,
    CazadoresRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class CazadoresModule { }
