import { Component, OnInit } from '@angular/core';
import { Event, Print, Photoshoot, Wedding, Newborn } from '../classes/events';
import { Client } from '../classes/client';
import { EventType, ShootType } from '../constants';
import { DateService } from '../utilities/date.service';
import { EnumService } from '../utilities/enum.service';
import { UUID } from 'angular2-uuid';

@Component({
  moduleId: module.id,
  selector: 'new-event-form',
  templateUrl: `./new-event-form.component.html`,
})



export class NewEventForm implements OnInit {

    eventTypes : string[] = EnumService.enumToStringArrayFavorWhitespace(EventType);
    shootTypes : string[] = EnumService.enumToStringArrayFavorWhitespace(ShootType);
    event:Event;

constructor() { }

 ngOnInit():void {
	 this.newEvent();
 }

	newEvent():void {
		this.event = new Event(UUID.UUID(), "", "", null, new Date());
	}

    resetForm():void {
        console.error("resetting the form is not implemented yet.");
        //TODO
    }

	get diagnostic() { return JSON.stringify(this.event)};

	get parseDate() { return DateService.parseDate };

	get dateIsValid() { return DateService.dateIsValid };

	onSubmit():void {
		alert("Submitted (not really)");
		this.newEvent();
	}

//etype : string[] = ["purchase", "post shoot meeting", "booking meeting", "photoshoot"];
	// ngOnInit():void {
	// 	let test_client:Client = new Client(123,"Client name(s)", "Client notes");
	// 	let test_dateborn:Date = new Date(2017,7,22,14,30,0,0);
	// 	let test_date1:Date = new Date(2017,7,28,14,30,0,0);
	// 	let test_date2:Date = new Date(2017,7,30,14,30);
	// 	let test_event:Event = new Event(123, "test event", "test notes", EventType.Purchase, test_date1);
	// 	let test_newborn:Event = new Newborn(456, "test newborn event", "test newborn notes", EventType.Photoshoot, test_date1, test_client, 2.5, test_date2, ShootType.Newborn, test_dateborn);
	//     console.log("EventComponent ngOnInit");
	// 	console.log("Event: ");
	// 	console.log(test_event);
	// 	console.log("Newborn");
	// 	console.log(test_newborn)
	//   }


 }
