import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllEventsComponent } from './all-events/all-events.component';
import { AppComponent } from './app.component';
import { EventsDetailsComponent } from './events-details/events-details.component';


// const route1: Routes = [{path: '', component: AppComponent}];
// const route2: Routes = [{path: 'details', component: EventsDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot([{path: '', component: AllEventsComponent},
                                  {path: 'details', component: EventsDetailsComponent},]),
                                ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
