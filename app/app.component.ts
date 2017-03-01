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

        // this.eventService.getAllEvents()
        //     .then(
        //         (events) => {
        //             console.log("---getAllEvents--");
        //             console.log("All Events Returned " + events.length + " elements: ");
        //             console.log(events);
        //         })
        //     .catch(
        //         (err) => console.log("ERRROR: " + err)
        //     );



        let getByIDSuccess = this.eventService.getEventByID("1000")
            .then(
                (event) => {
                    console.log("---getEventByID(1000)--(should succeed)-");
                    console.log(event);
                }
            )
            .catch(
                (err) => console.log("ERROR: " + err)
            );
        let getByIDFail = this.eventService.getEventByID("90")
            .then(
                (event) => {
                    console.log("---getEventByID(90)--(should fail)-");
                    console.log(event);
                }
            )
            .catch(
                (err) => console.log("ERROR: " + err)
            );


        // console.log("---getEventByID---");
        // console.log();
        // // console.log(this.eventService.getEventByID("sdfdsf"));
        // console.log("---saveEvent--");
        // let dupEvent = new Photoshoot("1003","Jack and Jill Engagement","Jill afraid of hills",EventType.Photoshoot, new Date("2017-04-23 16:30:00"),
        //                     new Client(123,"Jack and Jill","Met via Fairy Tale"),2,new Date("2017-04-30"),"St. Anothony Main",ShootType.Engagement);
        // let newEvent = new Newborn("1009","Jillian Newborn","Jack and Jill are parents",EventType.Photoshoot, new Date("2018-04-23 16:30:00"),
        //                     new Client(123,"Jack and Jill","Met via Fairy Tale"),3,new Date("2018-04-30"),"Studio",ShootType.Newborn, new Date("2018-04-18"));
        // console.log("Save Duplicate: " + this.eventService.saveEvent(dupEvent));
        // console.log("Length: " + this.eventService.getAllEvents().length);
        // console.log("Save New: " + this.eventService.saveEvent(newEvent));
        // console.log("Length: " + this.eventService.getAllEvents().length);



    }
}
