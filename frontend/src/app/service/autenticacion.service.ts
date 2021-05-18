import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  usuario: string = environment.user;
  passw: string = environment.password;

  constructor() { }

  autenticar(user: string, contraseña: string): boolean {
    return (this.usuario == user && this.passw == contraseña);
  }
}
