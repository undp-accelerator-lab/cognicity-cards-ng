import { Injectable } from "@angular/core";

interface LatLng {
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: "root"
})
export class FireService {
  informerLocation: LatLng;
  fireLocation: LatLng;
  fireRadius: LatLng;

  circleRadius: number

  // Setter
  setInformerLocation(newInformerLocation: LatLng) {
    this.informerLocation = newInformerLocation;
  }

  setFireLocation(newFireLocation: LatLng) {
    this.fireLocation = newFireLocation;
  }

  setFireRadius(newFireRadius: LatLng) {
    this.fireRadius = newFireRadius;
  }

  setCircleRadius(newCircleRadius: number) {
    this.circleRadius = newCircleRadius
  }

  // Getter
  getInformerLocation(): LatLng {
    return this.informerLocation;
  }

  getFireLocation(): LatLng {
    return this.fireLocation;
  }

  getFireRadius(): LatLng {
    return this.fireRadius;
  }

  getCircleRadius(): number {
    return this.circleRadius
  }
}
