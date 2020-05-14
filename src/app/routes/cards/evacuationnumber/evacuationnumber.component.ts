import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service';

@Component({
  selector: 'app-evacuationnumber',
  templateUrl: './evacuationnumber.component.html',
  styleUrls: ['./evacuationnumber.component.scss']
})
export class EvacuationnumberComponent implements OnInit {
  get selectedOption() : null | number {
    return this.deckService.getEvacuationNumber()
  }

  constructor(public deckService: DeckService) { }

  ngOnInit() {}

  onOptionClick(option: number) {
    this.deckService.setEvacuationNumber(option)
  }
}
