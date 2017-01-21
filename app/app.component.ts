import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  			<event></event>
			<receipt></receipt>
			<booking></booking>
			<reports></reports>`,
})
export class AppComponent  { name = 'Angular'; }
