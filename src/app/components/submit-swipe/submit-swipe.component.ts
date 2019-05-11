import { Component } from '@angular/core';
import { DeckService } from '../../services/cards/deck.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-submit-swipe',
  templateUrl: './submit-swipe.component.html',
  styleUrls: ['./submit-swipe.component.scss']
})
export class SubmitSwipeComponent {
  constructor(
    public deckService: DeckService,
    public navController: NavigationService
  ) {}

  submit() {
    this.deckService.submit()
    this.navController.next(this.deckService.getRoute())
  }
}
