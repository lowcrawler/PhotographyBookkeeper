import { Component, Input } from '@angular/core';
import { Event, Print, Photoshoot, Wedding, Newborn } from '../classes/events';

@Component({
  moduleId: module.id,
  selector: 'event',
  templateUrl: `./event.component.html`,
})


export class EventComponent  {
@Input()
	eventName : string;
 }
