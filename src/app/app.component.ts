import { WeatherData } from './models/weather';
import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService){}
   weatherData?: WeatherData;
  errorMessage?: string;
  cityName:string = 'cairo';
  onsubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  ngOnInit(): void {
    this.getWeatherData('Cairo');
  }

  getWeatherData(city: string): void {
    this.weatherService.getWeatherData(city)
      .subscribe(
        data => this.weatherData = data,
        (error: any) => {
          this.errorMessage = error.message;
          alert('the city is not in egypt');
        }
      );
  }
  title = 'weatherApp';
}
