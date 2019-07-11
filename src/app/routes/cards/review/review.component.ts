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
    this.deckService.userCanBack()
    this.deckService.userCannotContinue()

    this.isLocationInIndonesia = await this.deckService.isLocationInIndonesia();
  }

  get showWarning(): boolean {
    return this.isDescriptionAndPhotoEmpty || !this.isLocationInIndonesia
  }

  get isDescriptionAndPhotoEmpty(): boolean {
    return !(this.deckService.getDescription() || this.deckService.getPreview());
  }
}
