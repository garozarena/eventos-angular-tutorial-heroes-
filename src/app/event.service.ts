import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Evento } from './eventos/event';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EventService {

  private eventsUrl = 'api/events';

  constructor(private http: HttpClient) { }
  
  /** GET heroes from the server */
  getEvents(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.eventsUrl)
      .pipe(
        tap(_ => console.log("GET hecho correctamente")),
      //catchError((console.log("Error en el GET"))
    );
  }

  addEvent(event: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.eventsUrl, event, httpOptions)
      .pipe(
        tap((event: Evento) => console.log("POST hecho correctamente"))
      );
  }

  /** DELETE: delete the hero from the server */
  deleteEvent(evento: Evento | number): Observable<Evento> {
    const id = typeof evento === 'number' ? evento : evento.id;
    const url = `${this.eventsUrl}/${id}`;
 
    return this.http.delete<Evento>(url, httpOptions).pipe(
      tap(_ => console.log("Eliminado correctamente"))
    );
  }

  /** PUT: update the hero on the server */
  updateEvent(evento: Evento): Observable<any> {
    return this.http.put(this.eventsUrl, evento, httpOptions).pipe(
      tap(_ => console.log("Actualizado correctamente"))
    );
  }

}
