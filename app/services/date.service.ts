import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class DateService {
   constructor() {
   }

   public static parseDate(dateString: string): Date {
       if (dateString) { //TODO: eh?
           return new Date(dateString);
       } else {
           return null;
       }
   }

   public static dateIsValid(datestring:string):boolean {
   		return moment(datestring, "YYYY-MM-DD", true).isValid();
   }

}
