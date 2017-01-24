import { Component, Input, OnInit} from '@angular/core';
import { Event, Print, Photoshoot, Wedding, Newborn } from '../classes/events';
import { Client } from '../classes/client';
import { EventType, ShootType } from '../constants';

@Component({
  moduleId: module.id,
  selector: 'event',
  templateUrl: `./event.component.html`,
})


export class EventComponent  implements OnInit {
@Input()
	eventName : string;

	ngOnInit():void {
		let test_client:Client = new Client(123,"Client name(s)", "Client notes");
		let test_dateborn:Date = new Date(2017,7,22,14,30,0,0);
		let test_date1:Date = new Date(2017,7,28,14,30,0,0);
		let test_date2:Date = new Date(2017,7,30,14,30);
		let test_event:Event = new Event(123, "test event", "test notes", EventType.Purchase, test_date1);
		let test_newborn:Event = new Newborn(456, "test newborn event", "test newborn notes", EventType.Photoshoot, test_date1, test_client, 2.5, test_date2, ShootType.Newborn, test_dateborn);
	    console.log("EventComponent ngOnInit");
		console.log("Event: ");
		console.log(test_event);
		console.log("Newborn");
		console.log(test_newborn)
	  }


 }
