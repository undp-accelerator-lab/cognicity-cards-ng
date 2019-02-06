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
    console.log({ newInformerLocation })
    this.informerLocation = newInformerLocation;
  }

  setFireLocation(newFireLocation: LatLng) {
    console.log({ newFireLocation })
    this.fireLocation = newFireLocation;
  }

  setFireRadius(newFireRadius: LatLng) {
    console.log({ newFireRadius })
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
}
