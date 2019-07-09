import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DeckService } from '../../../services/cards/deck.service';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-evacuationarea',
  templateUrl: './evacuationarea.component.html',
  styleUrls: ['./evacuationarea.component.scss']
})
export class EvacuationareaComponent implements OnInit {
  get selectedOption(): null | boolean {
    return this.deckService.getEvacuationArea()
  }

  constructor(
    public deckService: DeckService,
    public navController: NavigationService,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {}

  onOptionClick(option: boolean) {
    this.deckService.setEvacuationArea(option)

    setTimeout(() => {
      this.navController.next(this.deckService.getRoute())
    }, 500)
  }
}
