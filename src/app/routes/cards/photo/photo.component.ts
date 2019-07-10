import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../../../app/services/cards/deck.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  constructor(
    public deckService: DeckService
  ) { }

  ngOnInit() {
    this.deckService.userCanBack()
    this.deckService.userCanContinue()
  }
}
