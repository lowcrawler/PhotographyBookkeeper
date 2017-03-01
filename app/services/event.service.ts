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
            new Wedding("1009","Ang and Erc Wedding","Like the wild.  Bridal party of 14. She's a lawyer and attened northwestern, he's a comm major that is moving into education. Not huge into dance photos. Like the 'night stuff'. Drawn to the music. Drawn to some of the vintage filters.",
                EventType.Photoshoot, new Date("2017-12-16 11:30:00"), new Client(123,"Erc and Ang","Originally thought they were contacting Karen Feder"),9,new Date("2017-11-09"),"Nazareth and Rush Creek",ShootType.Wedding,"No other vendors","Schedule TBD","",300,"No additional locations"),
            new Wedding("1002","Jack and Jill Wedding","Big water drinkers",EventType.Photoshoot, new Date("2017-09-23 11:30:00"), new Client(123,"Jack and Jill","Met via Fairy Tale"),8,new Date("2017-11-09"),"Silverwood",ShootType.Wedding,"No other vendors","Schedule TBD","Bucket is a VIP",300,"No additional locations"),
            new Photoshoot("1003","Jack and Jill Engagement","Jill afraid of hills",EventType.Photoshoot, new Date("2017-04-23 16:30:00"), new Client(123,"Jack and Jill","Met via Fairy Tale"),2,new Date("2017-04-30"),"St. Anothony Main",ShootType.Engagement,),
            new Purchase("1004","Parking","",EventType.Purchase, new Date("2017-09-23"), 2.50,AccountingCategory.Travel,"Parking on Silver Lake Road",true,1002),
            new Purchase("1004","","",EventType.Purchase, new Date("2017-01-23"), 5000,AccountingCategory.Equipment,"New Nikon D5 Camera Body",true)
        );




    }

    public getAllEvents():Promise<Event[]> {
        // returns promise for ALL events

        return new Promise((resolve,reject)=> {
            //TODO: pull from DB
            if (true) { // if there weren't any errors //TODO, actually check
                resolve(this.allEvents); // resolve passes to the "then" of the caller
            }
            else {
                reject(this.allEvents);  // reject passed to the catch
            }
        });

        //future: pull from local and then DB, convert to observer
    }


    public getEventByID(eventID:string):Promise<Event> {
        // returns promise for FIRST Event with matching eventID

        return new Promise((resolve,reject)=> {
            var ret : Event = null;
            this.getAllEvents()
                .then(
                    (allEvents) => {
                        for (let evt of allEvents) {
                            if (eventID == evt.eventID) {
                                resolve(evt);
                            }
                        }
                        reject("getEventByID Rejected, reason: event " + eventID + " not found");
                    }
                )
                .catch(
                    (err) => console.log("getEventsByID ERROR: " + err)
                );
        });
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
