import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './shell/menu/menu.component';
import { AutenticacionService } from '../service/autenticacion.service';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, MainComponent, NotFoundComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [ShellComponent],
  providers: [AutenticacionService]
})
export class CoreModule { }
