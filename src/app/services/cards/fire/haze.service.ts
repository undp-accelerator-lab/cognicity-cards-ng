import { Injectable } from "@angular/core";

interface LatLng {
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: "root"
})
export class HazeService {
  hazeLocation: LatLng;
  hazeVisibility: number = 1;
  airQuality: number = 0;

  // Getter
  getHazeLocation(): LatLng {
    return this.hazeLocation;
  }

  getHazeVisibility(): number {
    return this.hazeVisibility;
  }

  getAirQuality(): number {
    return this.airQuality;
  }

  // Setter
  setHazeLocation(newHazeLocation: LatLng) {
    this.hazeLocation = newHazeLocation;
  }

  setHazeVisibility(newHazeVisibility: number) {
    this.hazeVisibility = newHazeVisibility;
  }

  setAirQuality(newAirQuality: number) {
    this.airQuality = newAirQuality;
  }
}
