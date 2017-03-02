import {
	Injectable
}
from '@angular/core';
import {
	Headers, Http
}
from '@angular/http';


@
Injectable()
export class WeatherService {

	private weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Hyderabad,India&APPID=4573c189d467ca1814c1c10000060792';
	private weatherCordUrl = 'http://api.openweathermap.org/data/2.5/weather';
	constructor(private http: Http) {}

	getWeather(lat, lon) {
		return this.http.get(this.weatherCordUrl + "?lat=" + lat + "&lon=" + lon + "&APPID=4573c189d467ca1814c1c10000060792")
			.map(response => response.json())
			.catch(this.handleError);

	}
	private handleError(error: any): any {
		console.error('An error occurred', error); // for demo purposes only
	}

}
