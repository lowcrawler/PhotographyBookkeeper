// This service will get and save events from the DB (or mock)

import { Injectable } from '@angular/core';
import { Event, Meeting, Purchase, Print, Photoshoot, Wedding, Newborn } from '../classes/events';
import { EventType, ShootType } from '../constants';

export const EVENTS:string[]=[
    "Blergh", "Blarch", "Blech"
];


@Injectable()
export class EventService {

    // MOCKS
    meetEvt = new Meeting("1000","Jack meeting","Jack works on a hill",EventType.Meeting, new Date("2017-02-25 15:00:00"), null, "Barley John's", true);
    wedEvt = new Wedding("1002","Jack and Jill Wedding","Big water drinkers",EventType.Photoshoot, new Date("2017-09-23 11:30:00"), null,8,new Date("2017-11-09"),"Silverwood",ShootType.Wedding,"No other vendors","Schedule TBD","Bucket is a VIP",300,"No additional locations");
    allEvents : Event[] = [this.meetEvt,this.wedEvt];

    getAllEvents():Event[] { return this.allEvents; } //TODO: stub

    getEventByID(eventID:string):Event { return null; } //TODO: stub

    saveEvent(event:Event):boolean {return true;} //TODO: stub



}
