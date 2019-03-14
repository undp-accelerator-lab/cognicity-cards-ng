import { Component } from '@angular/core';
import { DeckService } from '../../services/cards/deck.service'

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent {
  color: string

  constructor(
    private deckService: DeckService
  ) {
    switch(deckService.getDeckClass()) {
      case 'fire': this.color = 'red'; break;
      case 'earthquake': this.color = 'orange'; break;
      default: this.color = 'blue'
    }
  }

  onChangeDescription(desc: string) {
    this.deckService.setDescription(desc)
  }

  get description(): string {
    return this.deckService.getDescription()
  }
}
