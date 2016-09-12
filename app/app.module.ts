// this allows us to encaspulate components into one section
// multiple modules can represent different sections
// 1 app - many components

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent ],
	// core component we want to use
	bootstrap: [ AppComponent ]
})
// this is the module of the component we created
// now it will be bootstrapped
export class AppModule {}