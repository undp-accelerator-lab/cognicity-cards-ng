import { Component } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service'
import { NavigationService } from '../../../services/navigation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.scss']
})
export class ThankComponent {
  isShowReportAgain = false
  reportAgainText = ''

  constructor(
    public deckService: DeckService,
    public navController: NavigationService,
    public translate: TranslateService
  ) {
    const deckType = this.deckService.getDeckType()
    if (deckType === 'earthquake' || 'flood' && this.deckService.finishedSubType.length === 0) {
      this.isShowReportAgain = true

      switch(this.deckService.getDeckSubType()) {
        case 'road':
          this.reportAgainText = 'card.reportAgainStructure'
          break;
        case 'structure':
          this.reportAgainText = 'card.reportAgainAccess'
          break;
        case 'flood':
          this.reportAgainText = 'card.reportAgainFlood'
          break;
      }
    }

    this.deckService.reset()
  }

  get typeImage(): string {
    switch (this.deckService.getDeckSubType()) {
      case 'fire': return '../../../assets/decks/fire/thanks/SuccessFireReport.png';
      case 'haze': return '../../../assets/decks/fire/thanks/SuccessHazeReport.png';
      case 'flood': return '../../../assets/decks/flood/thanks/SuccessFloodReport.svg';

      case 'road': return '../../../../assets/decks/earthquake/thanks/AddAccessReportIcon_Success.png'
      case 'structure': return '../../../../assets/decks/earthquake/thanks/AddStructureFailureIcon_Success.png'

      case 'wind': return '../../../../assets/decks/wind/thank/success_wind.png'

      case 'volcano': return '../../../../assets/decks/volcano/thank/success.png'
    }
  }

  reportAnotherCard() {
    this.deckService.setSubSubmission();
    let newDeckSubType: any
    if(this.deckService.getDeckType() === 'earthquake' || 'flood' ){
      if(this.deckService.getDeckType() === 'flood'){
        newDeckSubType = 'flood'
      } else{
        newDeckSubType = this.deckService.getDeckSubType() === 'road' ? 'structure' : 'road';
      }
      this.deckService.setDeckSubType(newDeckSubType);
      this.navController.filterRoutes(newDeckSubType);
      this.navController.resetEqDeckToLocation(this.deckService.getRoute());
    }else{
      this.navController.reset(this.deckService.getRoute());
    }

    // console.log('deckType',this.deckService.getDeckType());
    // console.log('deckSubType',this.deckService.getDeckSubType());
  }
}
