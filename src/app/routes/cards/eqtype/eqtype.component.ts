import { Component } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { ActivatedRoute } from '@angular/router';
import { DeckService } from '../../../services/cards/deck.service';

@Component({
  selector: 'app-eqtype',
  templateUrl: './eqtype.component.html',
  styleUrls: ['./eqtype.component.scss']
})
export class EqtypeComponent {
  constructor(
    public navController: NavigationService,
    public route: ActivatedRoute,
    public deckService: DeckService,
  ) {}

  onTypeSelected(type) {
    this.deckService.setDeckSubType(type)
    this.navController.next(this.route)
  }
}
