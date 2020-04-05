import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  constructor(
    public deckService: DeckService,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.deckService.userCanBack()
    
    this.checkIsUserAbleToContinue()
  }

  get selectedOption(): number[] {
    return this.deckService.getVolcanicSigns()
  }

  checkIsUserAbleToContinue() {
    // If user already select atleast one option, next button is enabled
    if (this.deckService.getVolcanicSigns().length > 0) {
      this.deckService.userCanContinue()
    } else {
      this.deckService.userCannotContinue()
    }
  }

  onOptionClick(option: number) {
    if (this.deckService.getVolcanicSigns().includes(option)) {
      this.deckService.setVolcanicSigns(this.deckService.getVolcanicSigns().filter(o => o !== option))
    } else {
      this.deckService.setVolcanicSigns(this.deckService.getVolcanicSigns().concat(option))
    }

    this.checkIsUserAbleToContinue()
  }
}
