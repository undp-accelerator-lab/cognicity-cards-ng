import { Injectable } from "@angular/core";

interface LatLng {
  lat: number;
  lng: number;
}

@Injectable()
export class HazeService {
  hazeLocation: LatLng;
  hazeVisibility: number;
  airQuality: number;
  hazePreview: File;
  hazeDescription: string;

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

  getHazePreview(): File {
    return this.hazePreview;
  }

  gethazeDescription(): string {
    return this.hazeDescription;
  }
}
