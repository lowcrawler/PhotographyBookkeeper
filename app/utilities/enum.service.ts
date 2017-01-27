import { Injectable } from '@angular/core';

@Injectable()
export class EnumService {
   constructor() {

   }

    public static enumToStringArrayFavorWhitespace(enumName:any): string[] {
        let debug = false;
        if(debug)console.log("enumToStringArray");
        if(debug)console.log(enumName);

        let members : string[] = [];
        for (var item in enumName) {
            if(debug)console.log("ITEM: " + item);
            if (/\s/.test(item)) { // item contains a whitespace character....
               if(debug)console.log("  Contains whitespace");
           // check if there is a non-whitespaced item that matches
               let index = members.indexOf(item.replace(/\s/g,''));
               if(index >-1) {
                   if(debug)console.log("  Replacing1");
                   members[index] = item; //... replace the no-whitespace version with the whitespace version
                   continue;
               }
               if(debug)console.log("  Pushing1");
               members.push(item); // ... if there wasn't a no-whitespace version, push the whitespace version
           } else { // item does not contain a whitespace character
               if(debug)console.log("  no whitespace");
           //before pushing the non-whitespaced item, make sure there isn't a whitespaced version:
               let nonWhitespacedAlreadyExists = false;
               for (var entry in members) {
                   if (entry.replace(/\s/g,'') == item) {
                       if(debug)console.log("  found whitespaced version: " + entry);
                       nonWhitespacedAlreadyExists = true;
                       break;
                   }
               }
               if (!nonWhitespacedAlreadyExists) {
                   if(debug)console.log("  Pushing2");
                   members.push(item);
               }
           }
       }
       return members;
   }
}
