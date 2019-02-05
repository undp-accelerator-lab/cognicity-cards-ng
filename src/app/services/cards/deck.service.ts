import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  type: string
  description: string = ''
  preview: File

  getDeckType() {
    return this.type
  }

  getDescription() {
    return this.description
  }

  getPreview() {
    return this.preview
  }

  setDeckType(newType: string) {
    this.type = newType
  }

  setDescription(newDescription: string) {
    console.log({ newDescription })
    this.description = newDescription;
  }

  setPreview(newPreview: File) {
    this.preview = newPreview;
  }
}