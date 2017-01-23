export class Event {
  constructor(
    public id: number,
    public name: string,
    public notes: string,
    public type: string //todo: enum (Photoshoot, BookingMeeting, PostShootMeeting, Purchase, Print)
  ) {}
}


export class Print extends Event {
	constructor(
		public id: number,
		public name: string,
		public notes: string,
		public type: string, //todo: enum (Photoshoot, BookingMeeting, PostShootMeeting, Purchase, Print)

		public printType : string //todo: enum  (Single, Album, Card)
	) {
		super(id, name, notes, type);
	}
}

export class Photoshoot extends Event {
	constructor(
		public id: number,
		public name: string,
		public notes: string,
		public type: string, //todo: enum (Photoshoot, BookingMeeting, PostShootMeeting, Purchase, Print)

		// todo: client class  public client: client,
		public datetime: string, //todo: date object
		public hours: number,
		public photoDueDate: string, //todo: date object
		public shootType: string //tood: enum (Family, Senior, Newborn, Wedding, Engagement )
	){
		super(id, name, notes, type);
	}
}

export class Wedding extends Photoshoot {
	constructor(
		public id: number,
		public name: string,
		public notes: string,
		public type: string, //todo: enum (Photoshoot, BookingMeeting, PostShootMeeting, Purchase, Print)

		// todo: client class  public client: client,
		public datetime: string, //todo: date object
		public hours: number,
		public photoDueDate: string, //todo: date object
		public shootType: string, //tood: enum (Family, Senior, Newborn, Wedding, Engagement )

		public vendorInfo: string,
		public schedule: string,
		public vipInfo: string,
		public numPhotos: number,
		public additionalLocations: string
	){
		super(id, name, notes, type, datetime, hours, photoDueDate, shootType);
	}
}

export class Newborn extends Photoshoot {
	constructor(
		public id: number,
		public name: string,
		public notes: string,
		public type: string, //todo: enum (Photoshoot, BookingMeeting, PostShootMeeting, Purchase, Print)
		// todo: client class  public client: client,
		public datetime: string, //todo: date object
		public hours: number,
		public photoDueDate: string, //todo: date object
		public shootType: string, //tood: enum (Family, Senior, Newborn, Wedding, Engagement )

		public estimateDueDate: string //todo: date object
	) {
		super(id, name, notes, type, datetime, hours, photoDueDate, shootType);
	}
}
