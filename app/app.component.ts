import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventService } from './services/event.service';

//temp for testing
import { Event, Meeting, Purchase, Print, Photoshoot, Wedding, Newborn } from './classes/events';
import { Client } from './classes/client';
import { EventType, ShootType, AccountingCategory } from './constants';

@Component({
  selector: 'my-app',
  template: `<nav>
  				<a routerLink="/event" routerLinkActive="active">Create New Event</a>
  				<a routerLink="/receipt" routerLinkActive="active">Register Receipt</a>
  				<a routerLink="/booking" routerLinkActive="active">Set New Booking</a>
  				<a routerLink="/reports" routerLinkActive="active">View Reports</a>
			</nav>
			<router-outlet></router-outlet>`,
providers: [EventService]
})

export class AppComponent implements OnInit {


     constructor(private eventService:EventService) { }

    ngOnInit():void {

        this.eventService.getAllEvents()
            .then(
                (events) => {
                    console.log("---getAllEvents--");
                    console.log("All Events Returned " + events.length + " elements: ");
                    console.log(events);
                    console.log("/n");
                })
            .catch(
                (err) => console.log("ERRROR: " + err)
            );



        let getByIDSuccess = this.eventService.getEventByID("1000")
            .then(
                (event) => {
                    console.log("---getEventByID(1000)--(should succeed)-");
                    console.log(event);
                    console.log("/n");
                }
            )
            .catch(
                (err) => console.log("ERROR--(should NOT see): " + err)
            );
        let getByIDFail = this.eventService.getEventByID("90")
            .then(
                (event) => {
                    console.log("---getEventByID(90)--(should NOT see)-");
                    console.log(event);
                }
            )
            .catch(
                (err) => {
                    console.log("ERROR (this message is what we expect for eventID 90): " + err);
                    console.log("/n");
                }
            );


         let dupEvent = new Purchase("1014","","Waited a year",EventType.Purchase, new Date("2018-01-23"), 4000,AccountingCategory.Equipment,"New Nikon D5 Camera Body",true);
         let newEvent1 = new Newborn("1009","Jillian Newborn","Jack and Jill are parents",EventType.Photoshoot, new Date("2018-04-23 16:30:00"),
                             new Client(123,"Jack and Jill","Met via Fairy Tale"),3,new Date("2018-04-30"),"Studio",ShootType.Newborn, new Date("2018-04-18"));
         let newEvent2 = new Newborn("1020","Jall Newborn","Jack and Jill are parents",EventType.Photoshoot, new Date("2019-04-23 16:30:00"),
                             new Client(123,"Jack and Jill","Met via Fairy Tale"),3,new Date("2019-04-30"),"Studio",ShootType.Newborn, new Date("2019-04-18"));

        this.eventService.saveEvent(dupEvent, true)
            .then(
                (savedEvent) => {
                    console.log("---saveEvent(dupEvent, update)--(should return event)");
                    console.log(savedEvent);
                    console.log("/n");
                }
            )
            .catch(
                (err) => {
                    console.log("---saveEvent(dupEvent, update)--");
                    console.log("ERROR (we should NOT see this message): " + err);
                }
            );

        this.eventService.saveEvent(newEvent1, true)
            .then(
                (savedEvent) => {
                    console.log("---saveEvent(newEvent1, update)--(should NOT see this)");
                    console.log(savedEvent);
                }
            )
            .catch(
                (err) => {
                    console.log("---saveEvent(newEvent1, update)--");
                    console.log("ERROR (this is the expected test result): " + err)
                    console.log("/n");
                }
            );

        this.eventService.saveEvent(dupEvent)
            .then(
                (savedEvent) => {
                    console.log("---saveEvent(dupEvent)--(should NOT see this)");
                    console.log(savedEvent);
                }
            )
            .catch(
                (err) => {
                    console.log("---saveEvent(dupEvent)--");
                    console.log("ERROR (this is the expected test result): " + err)
                    console.log("/n");
                }
            );

        this.eventService.saveEvent(newEvent2)
            .then(
                (savedEvent) => {
                    console.log("---saveEvent(newEvent2)--(should return event)");
                    console.log(savedEvent);
                    console.log("/n");
                }
            )
            .catch(
                (err) => {
                    console.log("---saveEvent(newEvent2)--");
                    console.log("ERROR (we should NOT see this): " + err)
                }
            );



    }
}
