import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service';

@Component({
  selector: 'app-windlocation',
  templateUrl: './windlocation.component.html',
  styleUrls: ['./windlocation.component.scss']
})
export class WindlocationComponent implements OnInit {

  constructor(private deckService: DeckService) {
    this.deckService.setDeckClass('wind')
  }

  ngOnInit() {

  }

}
