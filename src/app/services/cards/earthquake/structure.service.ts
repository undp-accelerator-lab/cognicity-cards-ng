import { Injectable } from "@angular/core";

interface LatLng {
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root'
})
export class StructureService {
  informerLocation: LatLng
  structureFailure: number = 1

  setInformerLocation(newInformerLocation: LatLng) {
    this.informerLocation = newInformerLocation;
  }

  setStructureFailure(newStructureFailure: number) {
    this.structureFailure = newStructureFailure
  }

  getInformerLocation(): LatLng {
    return this.informerLocation;
  }

  getStructureFailure() {
    return this.structureFailure
  }
}