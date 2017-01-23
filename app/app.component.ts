import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `<nav>
  				<a routerLink="/event" routerLinkActive="active">Create New Event</a>
  				<a routerLink="/receipt" routerLinkActive="active">Register Receipt</a>
  				<a routerLink="/booking" routerLinkActive="active">Set New Booking</a>
  				<a routerLink="/reports" routerLinkActive="active">View Reports</a>
			</nav>
			<router-outlet></router-outlet>`,
})

export class AppComponent  {

}
