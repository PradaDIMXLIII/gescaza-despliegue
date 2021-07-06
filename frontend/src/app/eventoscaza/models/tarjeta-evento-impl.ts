import { TarjetaEvento } from "./tarjeta-evento";

export class TarjetaEventoImpl implements TarjetaEvento {
  tarjetaEventoId: string;
  nombre: string;
  cotoCaza: string;
  numInvitaciones: number;
  fechaVencimiento: string;

  constructor() {}
}
