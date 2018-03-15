import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventService } from './event.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [HttpClient, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
