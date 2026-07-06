import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from "./weather/weather";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, CommonModule, WeatherComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('weather-app');
}
