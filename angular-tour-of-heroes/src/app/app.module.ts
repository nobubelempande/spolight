import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { Routes } from '@angular/router';
import { AllEventsComponent } from './all-events/all-events.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsDetailsComponent,
    AllEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
