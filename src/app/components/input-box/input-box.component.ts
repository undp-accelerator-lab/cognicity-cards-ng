import { Component, Input } from '@angular/core';
import { DeckService } from '../../services/cards/deck.service';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
})
export class InputBoxComponent {
  @Input() placeholder: string;
  @Input() name: string;
  @Input() id: string;



  constructor(private deckService: DeckService) {}

  onChangeInput(name :string , value: string) {
    this.deckService.setInputValue(name , value);
  }

  onDisableButtonClick() {
    this.deckService.setInputValue('' , '');
  }
}
