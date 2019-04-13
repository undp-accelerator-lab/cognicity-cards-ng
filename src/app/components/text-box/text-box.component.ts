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
    switch(deckService.getDeckType()) {
      case 'fire': this.color = 'red'; break;
      case 'haze': this.color = 'red'; break;
      case 'earthquake': this.color = 'orange'; break;
      case 'wind': this.color = 'cyan'; break;
      default: this.color = 'blue'
    }
  }

  onChangeDescription(desc: string) {
    this.deckService.setDescription(desc)
  }

  get description(): string {
    return this.deckService.getDescription()
  }

  get isTryToSubmitButNotValid(): boolean {
    return this.deckService.tryToSubmit && !this.deckService.isAllowedToSubmit
  }
}
