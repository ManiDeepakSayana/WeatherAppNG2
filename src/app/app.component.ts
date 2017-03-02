import {
	Component, OnInit
}
from '@angular/core';
import {
	MdDialog, MdDialogRef, MdSnackBar
}
from '@angular/material';
import {
	WeatherService
}
from './weather.service';


@
Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [WeatherService]
})
export class AppComponent implements OnInit {

	weatherValue;
	locationValue = "";
	tempValue = 0;
	weatherDes = '';
	pressvalue = 0;
	humidity = 0;
	visibility = 0;
	wind = 0;
	lat = 0;
	lon = 0;
	constructor(private weatherService: WeatherService) {}

	ngOnInit(): void {
		var test = this;
		navigator.geolocation.getCurrentPosition(function (location) {
			test.lat = location.coords.latitude;
			test.lon = location.coords.longitude;
			test.weatherService.getWeather(test.lat, test.lon)
				.subscribe(weatherData => {
						test.weatherValue = weatherData;
					},
					error => {}, () => { // when complete
						test.locationValue = test.weatherValue.name;
						test.tempValue = Math.round(test.weatherValue.main.temp - 273.15);
						test.weatherDes = test.weatherValue.weather[0].main;
						test.pressvalue = test.weatherValue.main.pressure;
						test.humidity = test.weatherValue.main.humidity;
						test.visibility = test.weatherValue.visibility;
						test.wind = test.weatherValue.wind.speed;
					}


				);
		});



	}
}
