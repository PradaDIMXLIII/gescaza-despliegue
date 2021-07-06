import { CazadorService } from "src/app/cazadores/service/cazador-service";
import { EventoCaza } from "./evento-caza";

export class EventoCazaImpl implements EventoCaza {
  cazaId: string;
  fechaEvento: string;
  tipoEvent: string = "CAZA";
  lugar: string;
  ciudad: string;
  horaEvento: string;
  comentariosEvento: string;
  agenda: string;
  cotoCaza: string;
  personasInvitadaHref: string;
  tipoCaza: string;
  precinto: string;
  trofeo: string;
  zonasMarcadasHref: string;
  perrosCazaHref: string;
  agendaHref: string;

  constructor() {}

}
