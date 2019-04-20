import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../services/cards/deck.service'

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
  rotateDeg: number = 0
  color: string

  constructor(private deckService: DeckService) {
    switch(deckService.getDeckType()) {
      case 'fire': this.color = 'red'; break;
      case 'haze': this.color = 'red'; break;
      case 'earthquake': this.color = 'orange'; break;
      case 'wind': this.color = 'cyan'; break;
      case 'volcano': this.color = 'blue'; break;
      default: this.color = 'blue'; break;
    }
  }

  ngOnInit() {
    if (this.isImageSelected)
      this.setImagePreview(this.deckService.getPreview())
  }

  get isImageSelected(): boolean {
    return this.deckService.getPreview() ? true : false
  }

  onFileChanged(event) {
    this.setImagePreview(event.target.files[0])
    this.deckService.setPreview(event.target.files[0] as File)
  }

  setImagePreview(file) {
    const reader = new FileReader()
    reader.onload = function (e: any) {
      document.getElementById('image-uploader-picture').setAttribute('src', e.target.result)
    }
    reader.readAsDataURL(file)
  }

  rotateImage() {
    console.log('image rotated')
    this.rotateDeg += 90
  }

  deletePreview() {
    this.deckService.setPreview(undefined)
  }
}
