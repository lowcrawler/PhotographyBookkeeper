import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { EventComponent }  from './event/event.component';
import { NewEventForm } from './event/new-event-form.component';
import { ReceiptComponent }  from './receipt/receipt.component';
import { BookingComponent }  from './booking/booking.component';
import { ReportsComponent }  from './reports/reports.component';


const appRoutes: Routes = [
  {
    path: 'event',
     component: EventComponent
  },
  {
	path: 'receipt',
	 component: ReceiptComponent
  },
  {
	path: 'booking',
	 component: BookingComponent
  },
  {
	path: 'reports',
	 component: ReportsComponent
  },
];

@NgModule({
  imports:      [
	  BrowserModule,
	  RouterModule.forRoot( appRoutes ) ,
    FormsModule],
  declarations: [
	  AppComponent,
	  EventComponent,
	  ReceiptComponent,
	  BookingComponent,
	  ReportsComponent,
    NewEventForm ],
  bootstrap:    [
	  AppComponent
  ]
})

export class AppModule { }
