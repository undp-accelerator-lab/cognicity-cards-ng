import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../../../app/services/cards/deck.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  constructor(
    public deckService: DeckService
  ) { }

  ngOnInit() {
    this.deckService.userCanBack()
    this.deckService.userCanContinue()
  }
}
