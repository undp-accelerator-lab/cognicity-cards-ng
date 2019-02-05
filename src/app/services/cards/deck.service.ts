import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  type: string
  description: string
  preview: File

  getDeckType() {
    return this.type
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