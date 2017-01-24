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
		let test_event:Event = new Event(123, "test event", "test notes", "test_eventtype");
		let test_newborn:Event = new Newborn(456, "test newborn event", "test newborn notes", "test_type_newborn", "test datetime", 2.5, "1/22/1981", "newborn", "testEstimateDate");
	    console.log("EventComponent ngOnInit");
		console.log("Event: ");
		console.log(test_event);
		console.log("Newborn");
		console.log(test_newborn)
	  }


 }
