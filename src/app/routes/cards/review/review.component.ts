import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor(public deckService: DeckService) { }

  get showWarning(): boolean {
    return !this.deckService.isAllowedToSubmit;
  }

  ngOnInit() {}
}
