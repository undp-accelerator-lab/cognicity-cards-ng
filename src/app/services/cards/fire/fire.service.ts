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

  // Utility

  countDistance(): number {
    // in meter
    return Math.sqrt(
      Math.pow((this.fireLocation.lat - this.informerLocation.lat), 2) +
      Math.pow((this.fireLocation.lng - this.informerLocation.lng), 2)
    )
  }
}
