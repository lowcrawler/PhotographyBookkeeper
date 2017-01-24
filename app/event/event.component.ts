import { Component, Input, OnInit} from '@angular/core';
import { Event, Print, Photoshoot, Wedding, Newborn } from '../classes/events';

@Component({
  moduleId: module.id,
  selector: 'event',
  templateUrl: `./event.component.html`,
})


export class EventComponent  implements OnInit {
@Input()
	eventName : string;

	ngOnInit():void {
		let test_dateborn:Date = new Date(2017,7,22,14,30,0,0);
		let test_date1:Date = new Date(2017,7,28,14,30,0,0);
		let test_date2:Date = new Date(2017,7,30,14,30);
		let test_event:Event = new Event(123, "test event", "test notes", "test_eventtype", test_date1);
		let test_newborn:Event = new Newborn(456, "test newborn event", "test newborn notes", "test_type_newborn", test_date1, 2.5, test_date2, "newborn", test_dateborn);
	    console.log("EventComponent ngOnInit");
		console.log("Event: ");
		console.log(test_event);
		console.log("Newborn");
		console.log(test_newborn)
	  }


 }
