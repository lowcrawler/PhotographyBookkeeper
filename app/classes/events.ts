import { Client } from './client';
import { EventType, ShootType } from '../constants';

export class Event {
  constructor(
    public id: number,
    public event_name: string,
    public notes: string,
    public eventType: EventType,
	public datetime: Date
  ) {}
}


export class Print extends Event {
	constructor(
		public id: number,
		public event_name: string,
		public notes: string,
		public eventType: EventType, //todo: enum (Photoshoot, BookingMeeting, PostShootMeeting, Purchase, Print)
		public datetime: Date,

		public client: Client,
		public printType : string //todo: enum  (Single, Album, Card)
	) {
		super(id, event_name, notes, eventType, datetime);
	}
}

export class Photoshoot extends Event {
	constructor(
		public id: number,
		public event_name: string,
		public notes: string,
		public eventType: EventType, //todo: enum (Photoshoot, BookingMeeting, PostShootMeeting, Purchase, Print)
		public datetime: Date,

		public client: Client,
		public hours: number,
		public photoDueDate: Date,
		public shootType: ShootType //tood: enum (Family, Senior, Newborn, Wedding, Engagement )
	){
		super(id, event_name, notes, eventType, datetime);
	}
}

export class Wedding extends Photoshoot {
	constructor(
		public id: number,
		public event_name: string,
		public notes: string,
		public eventType: EventType, //todo: enum (Photoshoot, BookingMeeting, PostShootMeeting, Purchase, Print)
		public datetime: Date,

		public client: Client,
		public hours: number,
		public photoDueDate: Date,
		public shootType: ShootType,

		public vendorInfo: string,
		public schedule: string,
		public vipInfo: string,
		public numPhotos: number,
		public additionalLocations: string
	){
		super(id, event_name, notes, eventType, datetime, client, hours, photoDueDate, shootType);
	}
}

export class Newborn extends Photoshoot {
	constructor(
		public id: number,
		public event_name: string,
		public notes: string,
		public eventType: EventType, //todo: enum (Photoshoot, BookingMeeting, PostShootMeeting, Purchase, Print)
		public datetime: Date,

		public client: Client,
		public hours: number,
		public photoDueDate: Date,
		public shootType: ShootType, //tood: enum (Family, Senior, Newborn, Wedding, Engagement )

		public estimateDueDate: Date
	) {
		super(id, event_name, notes, eventType, datetime, client, hours, photoDueDate, shootType);
	}
}
