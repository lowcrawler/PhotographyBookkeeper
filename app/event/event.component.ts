import { Component, Input } from '@angular/core';

@Component({
  selector: 'event',
  template: `<h1>Create New Event {{eventName}}</h1>`,
})


export class EventComponent  {
@Input()
	eventName : String;
 }
