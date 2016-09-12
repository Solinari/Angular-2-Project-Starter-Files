import { Component } from '@angular/core';

@Component({
	selector: 'my-app'
	template: `
		<div class="jumbotron">
			<h1>Welcome to our app!</h1>
		</div>
	`,
	styles: [`
		.jumbotron { box-shadow: 0 2px 0 rgba(0,0,0,0.2); }
	`]
})
// takes the place of angular 1 controller
// create angular module to use it then bootstrap it into the app
export class AppComponent {}