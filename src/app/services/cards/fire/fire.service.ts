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
  fireRadius: number;

  // Setter
  setInformerLocation(newInformerLocation: LatLng) {
    this.informerLocation = newInformerLocation;
  }

  setFireLocation(newFireLocation: LatLng) {
    this.fireLocation = newFireLocation;
  }

  setFireRadius(newFireRadius: number) {
    this.fireRadius = newFireRadius;
  }

  // Getter
  getInformerLocation(): LatLng {
    return this.informerLocation;
  }

  getFireLocation(): LatLng {
    return this.fireLocation;
  }

  getFireRadius(): number {
    return this.fireRadius;
  }
}
