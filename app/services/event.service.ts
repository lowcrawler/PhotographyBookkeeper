// This service will get and save events from the DB (or mock)

import { Injectable } from '@angular/core';
import { Event, Print, Photoshoot, Wedding, Newborn } from '../classes/events';

@Injectable()
export class EventService {

    getAllEvents():Event[] { return null; } //TODO: stub

    getEvent(eventID:string):Event { return null; } //TODO: stub

    saveEvent(event:Event):boolean {return true;} //TODO: stub

}
