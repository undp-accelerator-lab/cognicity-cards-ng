import { Component } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  constructor(
    public deckService: DeckService,
    public translate: TranslateService,) {}
}
