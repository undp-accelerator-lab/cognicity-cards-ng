import { Injectable } from "@angular/core";

type deckClass = 'fire' | 'earthquake'
type deckType = 'fire' | 'haze' | 'road' | 'structure'

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  class: deckClass
  type: deckType
  description: string = ''
  preview: File

  getDeckClass() {
    return this.class;
  }

  getDeckType() {
    return this.type
  }

  getDescription() {
    return this.description
  }

  getPreview() {
    return this.preview
  }

  setDeckClass(newClass: deckClass) {
    this.class = newClass
  }

  setDeckType(newType: deckType) {
    this.type = newType
  }

  setDescription(newDescription: string) {
    this.description = newDescription;
  }

  setPreview(newPreview: File) {
    this.preview = newPreview;
  }
}