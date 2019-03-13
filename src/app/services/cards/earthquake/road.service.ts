import { Injectable } from "@angular/core";

interface LatLng {
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root'
})
export class RoadService {
  informerLocation: LatLng
  roadAccessibility: number
  roadCondition: number

  setInformerLocation(newInformerLocation: LatLng) {
    this.informerLocation = newInformerLocation;
  }

  setRoadAccessibility(newRoadAccessibility: number) {
    this.roadAccessibility = newRoadAccessibility
  }

  setRoadCondition(newRoadCondition: number) {
    this.roadCondition = newRoadCondition
  }

  getInformerLocation(): LatLng {
    return this.informerLocation;
  }

  getRoadAccessibility() {
    return this.roadAccessibility
  }

  getRoadCondition() {
    return this.roadCondition
  }
}