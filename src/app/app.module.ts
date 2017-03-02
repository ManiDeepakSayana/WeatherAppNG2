import {
	NgModule
}
from '@angular/core';
import {
	BrowserModule
}
from '@angular/platform-browser';
import {
	MaterialModule
}
from '@angular/material';
import {
	FormsModule
}
from '@angular/forms';
import {
	RouterModule
}
from '@angular/router';

import {
	HttpModule
}
from '@angular/http';


import {
	AppComponent
}
from './app.component';
import {
	WeatherService
}
from './weather.service';

@
NgModule({
	imports: [
    BrowserModule,
    FormsModule,
	HttpModule,
    MaterialModule.forRoot(),
  ],
	declarations: [
	AppComponent,
],
	providers: [
    WeatherService
  ],
	bootstrap: [AppComponent],
})
export class MaterialAppModule {}
