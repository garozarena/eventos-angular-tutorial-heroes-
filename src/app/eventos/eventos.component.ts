import { Component, OnInit } from '@angular/core';
import { EventService } from "../event.service";
import { Evento } from './event';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: Evento[] = [];
  selectedEvent: Evento;
  prueba = { "name" :  "julio"};


  constructor(private eventService:EventService) {
    
   }

   ngOnInit() {
    this.getEvents();
  }

  onSelect(evento: Evento): void {
    this.selectedEvent = evento;
  }
  getEvents(): void {
    this.eventService.getEvents()
    .subscribe(eventos => this.eventos = eventos);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.eventService.addEvent({ name } as Evento)
      .subscribe(evento => {
        this.eventos.push(evento);
      });
  }

  delete(evento: Evento): void {
    this.eventos = this.eventos.filter(h => h !== evento);
    this.eventService.deleteEvent(evento).subscribe();
  }
}

//this.eventos.push(evento);