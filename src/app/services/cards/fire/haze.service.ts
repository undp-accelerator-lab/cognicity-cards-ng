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
  hazeVisibility: string = "1";
  airQuality: number = 0;

  // Getter
  getHazeLocation(): LatLng {
    return this.hazeLocation;
  }

  getHazeVisibility(): string {
    return this.hazeVisibility;
  }

  getAirQuality(): number {
    return this.airQuality;
  }

  // Setter
  setHazeLocation(newHazeLocation: LatLng) {
    this.hazeLocation = newHazeLocation;
  }

  setHazeVisibility(newHazeVisibility: string) {
    this.hazeVisibility = newHazeVisibility;
  }

  setAirQuality(newAirQuality: number) {
    this.airQuality = newAirQuality;
  }
}
