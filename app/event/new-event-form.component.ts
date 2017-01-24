import { Component, OnInit } from '@angular/core';
import { Event, Print, Photoshoot, Wedding, Newborn } from '../classes/events';
import { Client } from '../classes/client';
import { EventType, ShootType } from '../constants';

@Component({
  moduleId: module.id,
  selector: 'new-event-form',
  templateUrl: `./new-event-form.component.html`,
})



export class NewEventForm implements OnInit {



eventTypes : string[] = [];

 ngOnInit():void {



   console.log("NewEventForm ngOnInit");
   console.log(EventType);
    for (var item in EventType) {
      console.log("Item: " + item);
        if (EventType.hasOwnProperty(item)) {
          console.log("   HasOwn: true");
          if (/\s/.test(item)) { // item contains a whitespace character
            console.log("    Contains Whitespace!");
            //let tempItem = item.replace(/\s/g,'');
            //console.log("    TempItem: " + tempItem);
            let index = this.eventTypes.indexOf(item.replace(/\s/g,''));
            if(index >-1) {
              console.log("        Contains!!");
              this.eventTypes[index] = item;
              continue;
            }
          }

          this.eventTypes.push(item);
        }
     }
     console.log("EVENT TYPE:");
     console.log(this.eventTypes);
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
