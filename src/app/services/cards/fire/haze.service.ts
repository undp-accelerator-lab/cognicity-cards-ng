import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HazeService {
  hazeVisibility: number = 1;
  airQuality: number = 0;

  // Getter
  getHazeVisibility(): number { return this.hazeVisibility; }
  getAirQuality(): number { return this.airQuality; }

  // Setter
  setHazeVisibility(newHazeVisibility: number) { this.hazeVisibility = newHazeVisibility; }
  setAirQuality(newAirQuality: number) { this.airQuality = newAirQuality; }
}
