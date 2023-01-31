import { Component, OnInit } from '@angular/core';

import { DeckService } from '../../../services/cards/deck.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  constructor(
    public deckService: DeckService,
    public translate: TranslateService
  ) {}
  ngOnInit() {}

  handleSuccess(event) {
    // add verification step
    this.deckService.setCaptchaCleared();
  }
  
  get getSubscriptions() {
    return this.deckService.getSelectedRegion();
  }
}
