import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service';

@Component({
  selector: 'app-eqlocation',
  templateUrl: './eqlocation.component.html',
  styleUrls: ['./eqlocation.component.scss']
})
export class EqlocationComponent implements OnInit {
  type: string

  constructor(
    public deckService: DeckService
  ) {
    this.type = deckService.getDeckType() || 'structure'
  }

  ngOnInit() {
  }

}
