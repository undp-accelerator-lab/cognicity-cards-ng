import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  floodSigns: {
    [key: number]: string;
  };
  constructor(
    public deckService: DeckService,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.deckService.userCannotBack();

    this.checkIsUserAbleToContinue(9);
    this.floodSigns = [
      'Seco y todo seguro por ahora',
      'Riesgo de inundación observado (basura en el río, alcantarilla tapada, árbol caído etc.)',
      'Inundación leve',
      'Inundación peligrosa',
      'Inundación severa',
    ];
  }

  selectedOption(option: number) {
    return this.deckService.getFloodSigns() === option;
  }

  checkIsUserAbleToContinue(option: number) {
    // If user already select atleast one option, next button is enabled
    if (this.deckService.getFloodSigns() === option) {
      this.deckService.userCanContinue();
    } else {
      this.deckService.userCannotContinue();
    }
  }

  setFloodCondtionText(option: number) {
    this.deckService.setFloodSignText(this.floodSigns[option]);
  }

  onOptionClick(option: number) {
    this.deckService.setFloodSigns(option);
    this.setFloodCondtionText(option);
    this.checkIsUserAbleToContinue(option);
  }
}
