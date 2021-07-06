import { Cazador } from "./cazador";

export class CazadorImpl implements Cazador {
  cazadorId: string;
  nombre: string;
  apellidos: string;
  dni: string;
  fechaNacimiento: string;
  numSocio: number;
  cotoCaza: string;
  clubDeportivo: string;
  observaciones: string;
  nucleoCinologicoHref: string;
  tarjetasHref: string;
  armasHref: string;
  cazaInvitado: string;

  constructor() {}

}
