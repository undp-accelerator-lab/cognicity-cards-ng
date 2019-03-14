import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  class: string
  type: string
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

  setDeckClass(newClass: string) {
    this.class = newClass
  }

  setDeckType(newType: string) {
    this.type = newType
  }

  setDescription(newDescription: string) {
    this.description = newDescription;
  }

  setPreview(newPreview: File) {
    this.preview = newPreview;
  }
}