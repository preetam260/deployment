import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.html',
  styleUrls: ['./weather.css'],
  imports: [CommonModule]
})
export class WeatherComponent implements OnInit {

  weatherData: any[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private WeatherService: WeatherService) {}

  ngOnInit(): void {
    this.loadWeather();
  }

  loadWeather(): void {

    this.isLoading = true;
    this.errorMessage = '';

    this.WeatherService.getWeatherData().subscribe({

      next: (data) => {
        this.weatherData = data;
        this.isLoading = false;
      },

      error: (error) => {
        console.error(error);
        this.errorMessage = 'Failed to load weather data';
        this.isLoading = false;
      }

    });
  }
}