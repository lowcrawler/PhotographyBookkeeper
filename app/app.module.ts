import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EventComponent }  from './event.component';
import { ReceiptComponent }  from './receipt.component';
import { BookingComponent }  from './booking.component';
import { ReportsComponent }  from './reports.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, EventComponent, ReceiptComponent, BookingComponent, ReportsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
