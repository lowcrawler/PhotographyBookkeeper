import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventService } from './services/event.service';


@Component({
  selector: 'my-app',
  template: `<nav>
  				<a routerLink="/event" routerLinkActive="active">Create New Event</a>
  				<a routerLink="/receipt" routerLinkActive="active">Register Receipt</a>
  				<a routerLink="/booking" routerLinkActive="active">Set New Booking</a>
  				<a routerLink="/reports" routerLinkActive="active">View Reports</a>
			</nav>
			<router-outlet></router-outlet>
            Event value: {{evtVar}}`,
providers: [EventService]
})

export class AppComponent implements OnInit {
     evtVar = "nope";

     constructor(private eventService:EventService) { }

    ngOnInit():void {
        this.evtVar = "Hiya";
        this.evtVar = this.eventService.getAllEvents();
        console.log(this.evtVar);
    }
}
