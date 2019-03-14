import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service'

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.scss']
})
export class ThankComponent implements OnInit {

  constructor(private deckService: DeckService) { }

  ngOnInit() {
  }

  get typeImage(): string {
    switch (this.deckService.getDeckType()) {
      case 'fire': return '../../../assets/decks/fire/thanks/SuccessFireReport.png';
      case 'haze': return '../../../assets/decks/fire/thanks/SuccessHazeReport.png';
      case 'road': return '../../../../assets/decks/earthquake/thanks/AddAccessReportIcon_Success.png'
      case 'structure': return '../../../../assets/decks/earthquake/thanks/AddStructureFailureIcon_Success.png'
    }
  }

}
