import { Component } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { ActivatedRoute } from '@angular/router';
import { DeckService } from '../../../services/cards/deck.service'

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent {
  items: { 
    title: string, 
    hint: string, 
    subtype: string, 
    imgUrl: string, 
    highlightImgUrl,
  }[]

  constructor(
    public navController: NavigationService,
    public route: ActivatedRoute,
    public deckService: DeckService,
  ) {
    this.initItems()
  }

  initItems() {
    switch(this.deckService.getDeckType()) {
      case 'earthquake': this.items = [
        { 
          title: 'Road Accessibility', 
          hint: '', 
          subtype: 'road', 
          imgUrl: '../../../../assets/decks/earthquake/eqtype/AddAccessReportIcon.png',
          highlightImgUrl: '../../../../assets/decks/earthquake/eqtype/AddAccessReportIcon_Click.png'
        },
        {
          title: 'Structural Failure', 
          hint: '', 
          subtype: 'structure', 
          imgUrl: '../../../../assets/decks/earthquake/eqtype/AddStructureFailureIcon.png',
          highlightImgUrl: '../../../../assets/decks/earthquake/eqtype/AddStructureFailureIcon_Click.png'
        }
      ].filter(item => !this.deckService.finishedSubType.includes(item.subtype)); break;
    }
  }

  onTypeSelected(subtype) {
    this.deckService.setDeckSubType(subtype)

    this.navController.filterRoutes(subtype);

    this.navController.next(this.route)
  }
}
