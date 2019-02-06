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
  airQuality: string = "0";

  // Getter
  getHazeLocation(): LatLng {
    return this.hazeLocation;
  }

  getHazeVisibility(): string {
    return this.hazeVisibility;
  }

  getAirQuality(): string {
    return this.airQuality;
  }

  // Setter
  setHazeLocation(newHazeLocation: LatLng) {
    console.log({ newHazeLocation })
    this.hazeLocation = newHazeLocation;
  }

  setHazeVisibility(newHazeVisibility: string) {
    console.log({ newHazeVisibility })
    this.hazeVisibility = newHazeVisibility;
  }

  setAirQuality(newAirQuality: string) {
    console.log({ newAirQuality })
    this.airQuality = newAirQuality;
  }
}
