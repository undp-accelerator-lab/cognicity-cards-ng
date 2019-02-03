import { Injectable } from "@angular/core";

interface LatLng {
  lat: number;
  lng: number;
}

@Injectable()
export class FireService {
  informerLocation: LatLng;
  fireLocation: LatLng;
  fireRadius: number;
  fireDescription: string;
  firePreview: File;

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

  setFireDescription(newFireDescription: string) {
    this.fireDescription = newFireDescription;
  }

  setFirePreview(newFirePreview: File) {
    this.firePreview = newFirePreview;
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

  getFireDescription(): string {
    return this.fireDescription;
  }

  getFirePreview(): File {
    return this.firePreview;
  }
}
