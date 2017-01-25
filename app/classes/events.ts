import { Client } from './client';
import { EventType, ShootType } from '../constants';

export class Event {
  constructor(
    public eventID: number,
    public eventName: string,
    public notes: string,
    public eventType: EventType,
	public date: Date,
    public time?: string
  ) {
      //TODO: split time out from date if it's included in there?
  }
}


export class Print extends Event {
	constructor(
		public eventID: number,
		public eventName: string,
		public notes: string,
		public eventType: EventType,
		public datetime: Date,

		public client: Client,
		public printType : string
	) {
		super(eventID, eventName, notes, eventType, datetime);
	}
}

export class Photoshoot extends Event {
	constructor(
		public eventID: number,
		public eventName: string,
		public notes: string,
		public eventType: EventType,
		public datetime: Date,

		public client: Client,
		public hours: number,
		public photoDueDate: Date,
		public shootType: ShootType
	){
		super(eventID, eventName, notes, eventType, datetime);
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
		public shootType: ShootType,

		public vendorInfo: string,
		public schedule: string,
		public vipInfo: string,
		public numPhotos: number,
		public additionalLocations: string
	){
		super(eventID, eventName, notes, eventType, datetime, client, hours, photoDueDate, shootType);
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
		public shootType: ShootType,

		public estimateDueDate: Date
	) {
		super(eventID, eventName, notes, eventType, datetime, client, hours, photoDueDate, shootType);
	}
}
