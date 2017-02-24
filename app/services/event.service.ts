// This service will get and save events from the DB (or mock)

import { Injectable } from '@angular/core';
import { Event, Print, Photoshoot, Wedding, Newborn } from '../classes/events';

export const EVENTS:string[]=[
    "Blergh", "Blarch", "Blech"
];

@Injectable()
export class EventService {

    getAllEvents():string[] { return EVENTS; } //TODO: stub

    getEventByID(eventID:string):Event { return null; } //TODO: stub

    saveEvent(event:Event):boolean {return true;} //TODO: stub



}
