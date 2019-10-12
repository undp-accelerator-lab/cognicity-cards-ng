import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

type deckType = 'fire' | 'earthquake' | 'wind' | 'haze' | 'volcano'
type deckSubType = 'fire' | 'haze' | 'road' | 'structure' | 'wind' | 'volcano'

interface LatLng {
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  finishedSubType = [] 

  type: deckType
  subType: deckSubType

  route: ActivatedRoute

  structureFailure: number | undefined = undefined
  impact: number | undefined = undefined
  visibility: number | undefined = undefined
  airQuality: number | undefined = undefined
  accessibility: number | undefined = undefined
  condition: number | undefined = undefined
  location: LatLng
  fireLocation: LatLng
  fireRadius: LatLng
  fireDistance: number
  volcanicSigns: number[] = []
  evacuationNumber: null | number = null
  evacuationArea: null | boolean = null

  description: string = ''
  preview: File

  isPrevButtonDisabled = true
  isNextButtonDisabled = true

  userCanBack() {
    this.isPrevButtonDisabled = false
  }

  userCannotBack() {
    this.isPrevButtonDisabled = true
  }

  userCanContinue() {
    this.isNextButtonDisabled = false
  }

  userCannotContinue() {
    this.isNextButtonDisabled = true
  }

  async isLocationInIndonesia() {
    const response = await fetch(`
      https://nominatim.openstreetmap.org/reverse
      ?format=json&lat=${this.location.lat}&lon=${this.location.lng}`)

    const geocodeData = await response.json()

    return geocodeData.address.country_code === 'id'
  }

  // Getter
  getDeckType() { return this.type; }
  getDeckSubType() { return this.subType }

  getRoute() { return this.route }

  getStructureFailure() { return this.structureFailure };
  getImpact() { return this.impact };
  getVisibility(): number { return this.visibility; }
  getAirQuality(): number { return this.airQuality; }
  getAccessibility() { return this.accessibility }
  getCondition() { return this.condition }
  getLocation() { return this.location }
  getFireLocation(): LatLng { return this.fireLocation }
  getFireRadius(): LatLng { return this.fireRadius }
  getFireDistance(): number { return this.fireDistance }
  getVolcanicSigns(): number[] { return this.volcanicSigns }
  getEvacuationNumber(): null | number { return this.evacuationNumber }
  getEvacuationArea(): null | boolean { return this.evacuationArea }

  getDescription() { return this.description }
  getPreview() { return this.preview }

  // Setter
  setDeckType(type: deckType) { this.type = type }
  setDeckSubType(subType: deckSubType) { this.subType = subType }

  setRoute(route: ActivatedRoute) { this.route = route }

  setStructureFailure(structureFailure: number) { this.structureFailure = structureFailure }
  setImpact(impact: number) { this.impact = impact }
  setVisibility(visibility: number) { this.visibility = visibility; }
  setAirQuality(airQuality: number) { this.airQuality = airQuality; }
  setAccessibility(accessibility: number) { this.accessibility = accessibility }
  setCondition(condition: number) { this.condition = condition }
  setLocation(location: LatLng) { this.location = location }
  setFireLocation(fireLocation: LatLng) { this.fireLocation = fireLocation }
  setFireRadius(fireRadius: LatLng) { this.fireRadius = fireRadius }
  setFireDistance(fireDistance: number) { this.fireDistance = fireDistance }
  setVolcanicSigns(volcanicSigns : number[]) { this.volcanicSigns = volcanicSigns }
  setEvacuationNumber(evacuationNumber: number) { 
    if (this.evacuationNumber !== evacuationNumber) {
      this.evacuationNumber = evacuationNumber
    } else {
      this.evacuationNumber = null
    }
  }
  setEvacuationArea(evacuationArea: boolean) { this.evacuationArea = evacuationArea }
  
  setDescription(description: string) { this.description = description }
  setPreview(preview: File) { this.preview = preview }

  submit() {}

  reset() {
    this.finishedSubType.push(this.subType)

    this.impact = undefined
    this.structureFailure = undefined
    this.visibility = undefined
    this.airQuality = undefined
    this.accessibility = undefined
    this.condition = undefined
    this.location = undefined
    this.fireLocation = undefined
    this.fireRadius = undefined
    this.fireDistance = undefined
    this.volcanicSigns = []
    this.evacuationNumber = null
    this.evacuationArea = null
    this.description = ''
    this.preview = undefined
  }
}