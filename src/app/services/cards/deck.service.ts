import { Injectable } from "@angular/core";

type deckType = 'fire' | 'earthquake' | 'wind'
type deckSubType = 'fire' | 'haze' | 'road' | 'structure' | 'wind'

interface LatLng {
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  type: deckType
  subtype: deckSubType

  location: LatLng
  description: string = ''
  preview: File

  getDeckType() { return this.type; }
  getDeckSubType() { return this.subtype }
  getLocation() { return this.location }
  getDescription() { return this.description }
  getPreview() { return this.preview }

  setDeckType(type: deckType) { this.type = type }
  setDeckSubType(subType: deckSubType) { this.subtype = subType }
  setLocation(location: LatLng) { this.location = location }
  setDescription(description: string) { this.description = description }
  setPreview(preview: File) { this.preview = preview }
}