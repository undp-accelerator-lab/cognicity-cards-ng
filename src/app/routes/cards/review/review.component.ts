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
    // Fallback when checking location
    this.deckService.userCannotContinue()

    this.isLocationInIndonesia = await this.deckService.isLocationInIndonesia();

    // If both of description and image is empty or location is not indonesia, next button is disabled
    if (this.isDescriptionAndPhotoEmpty || !this.isLocationInIndonesia) {
      this.deckService.userCannotContinue()
    } else {
      this.deckService.userCanContinue()
    }
  }

  get showWarning(): boolean {
    return this.isDescriptionAndPhotoEmpty || !this.isLocationInIndonesia
  }

  get isDescriptionAndPhotoEmpty(): boolean {
    return !(this.deckService.getDescription() || this.deckService.getPreview());
  }
}
