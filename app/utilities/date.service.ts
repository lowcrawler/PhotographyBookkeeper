import { Injectable } from '@angular/core';

@Injectable()
export class DateService {
   constructor() {
   }

   public static parseDate(dateString: string): Date {
       if (dateString) {
           return new Date(dateString);
       } else {
           return null;
       }
   }


}
