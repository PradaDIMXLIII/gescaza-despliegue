import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventocazaFormComponent } from './eventocaza-form/eventocaza-form.component';
import { EventoscazaComponent } from './eventoscaza/eventoscaza.component';


const routes: Routes = [
  {
    path: '',
    component: EventoscazaComponent
  },
  {
    path: 'formulario',
    component: EventocazaFormComponent
  },
  {
    path: 'formulario/:id',
    component: EventocazaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoscazaRoutingModule { }
