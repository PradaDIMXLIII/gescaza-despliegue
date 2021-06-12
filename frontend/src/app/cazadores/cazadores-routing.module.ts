import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CazadorFormComponent } from './cazador-form/cazador-form.component';
import { CazadoresComponent } from './cazadores/cazadores.component';


const routes: Routes = [
  {
    path: '',
    component: CazadoresComponent
  },
  {
    path: 'formulario',
    component: CazadorFormComponent
  },
  {
    path: 'formulario/:id',
    component: CazadorFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CazadoresRoutingModule { }
