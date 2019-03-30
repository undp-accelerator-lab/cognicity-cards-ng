import { Component } from '@angular/core';
import { DeckService } from '../../services/cards/deck.service';

@Component({
  selector: 'app-submit-swipe',
  templateUrl: './submit-swipe.component.html',
  styleUrls: ['./submit-swipe.component.scss']
})
export class SubmitSwipeComponent {
  color: string
  isMobile: boolean

  constructor(
    public deckService: DeckService
  ) {
    switch(deckService.getDeckClass()) {
      case 'fire': this.color = 'white'; break;
      case 'earthquake': this.color = 'orange'; break;
      case 'wind': this.color = 'cyan'; break;
      default: this.color = 'blue'
    }
  }
}
