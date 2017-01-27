import { Client } from './client';
import { EventType, ShootType } from '../constants';

export class Event {
  constructor(
    public eventID: number,
    public eventName: string,
    public notes: string,
    public eventType: EventType,
	public date: Date
  ) {

  }
}

export class Meeting extends Event {
    constructor(
        public eventID: number,
        public eventName: string,
        public notes: string,
        public eventType: EventType,
        public dateTime: Date,

	    public client: Client,
        public location: string,
        public preShootMeeting: boolean 
    ) {
    super(eventID, eventName, notes, eventType, date);
    }
}

export class Purchase extends Event {
    constructor(
        public eventID: number,
        public eventName: string,
        public notes: string,
        public eventType: EventType,
        public date: Date,

        public amount: number,
        public accountingCategory: string, //TOOD: enum
        public itemDescription: string,
        public haveReceipt: boolean,
        public forEvent?: number
    ) {
    super(eventID, eventName, notes, eventType, date);
    }
}

export class Print extends Event {
	constructor(
		public eventID: number,
		public eventName: string,
		public notes: string,
		public eventType: EventType,
		public date: Date,

		public client: Client,
		public printType : string,
        public priceToClient: number
	) {
		super(eventID, eventName, notes, eventType, date);
	}
}

export class Photoshoot extends Event {
	constructor(
		public eventID: number,
		public eventName: string,
		public notes: string,
		public eventType: EventType,
		public dateTime: Date,

		public client: Client,
		public hours: number,
		public photoDueDate: Date,
        public location: string,
		public shootType: ShootType
	){
		super(eventID, eventName, notes, eventType, dateTime);
	}
}

export class Wedding extends Photoshoot {
	constructor(
		public eventID: number,
		public eventName: string,
		public notes: string,
		public eventType: EventType,
		public datetime: Date,

		public client: Client,
		public hours: number,
		public photoDueDate: Date,
        public location: string,
		public shootType: ShootType,

		public vendorInfo: string,
		public schedule: string,
		public vipInfo: string,
		public numPhotos: number,
		public additionalLocations: string //TODO:future more wedding info -- special shots, likes/dislikes, referral, etc
	){
		super(eventID, eventName, notes, eventType, datetime, client, hours, photoDueDate, location, shootType);
	}
}

export class Newborn extends Photoshoot {
	constructor(
		public eventID: number,
		public eventName: string,
		public notes: string,
		public eventType: EventType,
		public datetime: Date,

		public client: Client,
		public hours: number,
		public photoDueDate: Date,
        public location: string,
		public shootType: ShootType,

		public estimatedDueDate: Date
	) {
		super(eventID, eventName, notes, eventType, datetime, client, hours, photoDueDate, location, shootType);
	}
}
