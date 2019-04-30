import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service';

@Component({
  selector: 'app-evacuationarea',
  templateUrl: './evacuationarea.component.html',
  styleUrls: ['./evacuationarea.component.scss']
})
export class EvacuationareaComponent implements OnInit {
  get selectedOption(): null | boolean {
    return this.deckService.getEvacuationArea()
  }

  constructor(public deckService: DeckService) { }

  ngOnInit() {}

  onOptionClick(option: boolean) {
    this.deckService.setEvacuationArea(option)
  }
}
