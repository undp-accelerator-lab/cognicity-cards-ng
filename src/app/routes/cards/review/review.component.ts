import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  isLocationInIndonesia = true;

  constructor(public deckService: DeckService) {}

  async ngOnInit() {
    this.isLocationInIndonesia = await this.deckService.isLocationInIndonesia();
  }

  get showWarning(): boolean {
    return !this.isDescriptioORPhotoFilled() || !this.isLocationInIndonesia
  }

  isDescriptioORPhotoFilled(): boolean {
    return this.deckService.isDescriptioORPhotoFilled;
  }
}
