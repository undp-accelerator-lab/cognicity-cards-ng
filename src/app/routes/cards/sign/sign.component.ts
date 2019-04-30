import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  get selectedOption(): number[] {
    return this.deckService.getVolcanicSigns()
  }

  constructor(
    public deckService: DeckService
  ) { }

  ngOnInit() {}

  onOptionClick(option: number) {
    if (this.deckService.getVolcanicSigns().includes(option)) {
      this.deckService.setVolcanicSigns(this.deckService.getVolcanicSigns().filter(o => o !== option))
    } else {
      this.deckService.setVolcanicSigns(this.deckService.getVolcanicSigns().concat(option))
    }
  }
}
