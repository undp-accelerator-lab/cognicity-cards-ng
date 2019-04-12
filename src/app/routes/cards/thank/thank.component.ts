import { Component } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service'
import { NavigationService } from '../../../services/navigation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.scss']
})
export class ThankComponent {
  isShowReportAgain = false

  constructor(
    public deckService: DeckService, 
  ) {
    const deckType = this.deckService.getDeckType()
    if (deckType === 'earthquake') {
      this.isShowReportAgain = true
    }
  }

  get typeImage(): string {
    switch (this.deckService.getDeckSubType()) {
      case 'fire': return '../../../assets/decks/fire/thanks/SuccessFireReport.png';
      case 'haze': return '../../../assets/decks/fire/thanks/SuccessHazeReport.png';

      case 'road': return '../../../../assets/decks/earthquake/thanks/AddAccessReportIcon_Success.png'
      case 'structure': return '../../../../assets/decks/earthquake/thanks/AddStructureFailureIcon_Success.png'

      case 'wind': return '../../../../assets/decks/wind/thank/success_wind.png'
    }
  }
}
