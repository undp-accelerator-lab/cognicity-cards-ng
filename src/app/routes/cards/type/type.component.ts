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
  items: { title, hint, subtype, imgUrl, highlightImgUrl }[]

  constructor(
    public navController: NavigationService,
    public route: ActivatedRoute,
    public deckService: DeckService,
  ) {}

  initItems() {
    switch(this.deckService.getDeckType()) {
      case 'fire': this.items = [
        { 
          title: 'Fire Nearby', 
          hint: 'we will not report your location', 
          subtype: 'fire', 
          imgUrl: '../../../../assets/decks/fire/firetype/AddFireReport.png',
          highlightImgUrl: '../../../../assets/decks/fire/firetype/AddFireReport_Highlight.png'
        },
        { 
          title: 'Haze at My Location', 
          hint: '',
          subtype: 'haze', 
          imgUrl: "../../../../assets/decks/fire/firetype/AddHazeReport.png",
          highlightImgUrl: '../../../../assets/decks/fire/firetype/AddHazeReport_Highlight.png'
        },
      ]
    }
  }

  onTypeSelected(type) {
    this.deckService.setDeckSubType(type)
    this.navController.next(this.route)
  }
}
