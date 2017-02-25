// This service will get and save events from the DB (or mock)

import { Injectable } from '@angular/core';
import { Event, Meeting, Purchase, Print, Photoshoot, Wedding, Newborn } from '../classes/events';
import { Client } from '../classes/client';
import { EventType, ShootType, AccountingCategory } from '../constants';

export const EVENTS:string[]=[
    "Blergh", "Blarch", "Blech"
];


@Injectable()
export class EventService {

    // MOCKS
    allEvents : Event[] = [];



    constructor() {
        // MOCKS
        this.allEvents.push(
            new Meeting("1000","Jill and Jack meeting","Jack works at bottom of hill",EventType.Meeting, new Date("2017-02-25 15:00:00"), new Client(123,"Jack and Jill","Met via Fairy Tale"), "Barley John's", true),
            new Meeting("1006","Jill and Jack delivery meeting","Bucket got drunk!",EventType.Meeting, new Date("2017-010-25"), new Client(123,"Jack and Jill","Met via Fairy Tale"), "Studio", false),
            new Wedding("1002","Jack and Jill Wedding","Big water drinkers",EventType.Photoshoot, new Date("2017-09-23 11:30:00"), new Client(123,"Jack and Jill","Met via Fairy Tale"),8,new Date("2017-11-09"),"Silverwood",ShootType.Wedding,"No other vendors","Schedule TBD","Bucket is a VIP",300,"No additional locations"),
            new Photoshoot("1003","Jack and Jill Engagement","Jill afraid of hills",EventType.Photoshoot, new Date("2017-04-23 16:30:00"), new Client(123,"Jack and Jill","Met via Fairy Tale"),2,new Date("2017-04-30"),"St. Anothony Main",ShootType.Engagement,),
            new Purchase("1004","Parking","",EventType.Purchase, new Date("2017-09-23"), 2.50,AccountingCategory.Travel,"Parking on Silver Lake Road",true,1002),
            new Purchase("1004","","",EventType.Purchase, new Date("2017-01-23"), 5000,AccountingCategory.Equipment,"New Nikon D5 Camera Body",true)
        );




    }

    public getAllEvents():Event[] { //TODO return promise/observer
        return this.allEvents;

        //future: get local, then return DB

    }

    public getEventByID(eventID:string):Event {  //TODO: promise/observer
        // returns the FIRST matching eventID
        let allEvents:Event[] = this.getAllEvents();
        for (let evt of allEvents) {
            if (eventID == evt.eventID) {
                return evt;
            }
        }
        return null;
    }

    public saveEvent(event:Event):boolean { //TODO: promise/observer, save to DB
        let allEvents:Event[] = this.getAllEvents();
        let duplicateFound :boolean = false;
        for (let evt of allEvents) {
            if (event.eventID == evt.eventID) {
                duplicateFound = true;
            }
        }

        if (!duplicateFound) {
            this.allEvents.push(event);  //TODO: actually check something
            return true;
        }
        return false;  //TODO: throw error
    }



}
