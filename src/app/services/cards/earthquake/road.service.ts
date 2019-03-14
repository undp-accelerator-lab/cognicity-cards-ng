import { Injectable } from "@angular/core";

interface LatLng {
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root'
})
export class RoadService {
  roadAccessibility: number = 0
  roadCondition: number = 1

  setRoadAccessibility(newRoadAccessibility: number) {
    this.roadAccessibility = newRoadAccessibility
  }

  setRoadCondition(newRoadCondition: number) {
    this.roadCondition = newRoadCondition
  }

  getRoadAccessibility() {
    return this.roadAccessibility
  }

  getRoadCondition() {
    return this.roadCondition
  }
}