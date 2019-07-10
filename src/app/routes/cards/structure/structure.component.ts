import { Component, AfterViewChecked, ChangeDetectorRef, OnInit } from '@angular/core';
import { countArrowOffset } from '../../../utils/slider'
import { DeckService } from '../../../services/cards/deck.service';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit, AfterViewChecked {
  titles: string[]
  images: string[]
  
  title: string
  image: string
  structure: number

  constructor(
    public deckService: DeckService,
    private cdRef: ChangeDetectorRef
  ) {
    this.initTitles()
    this.initImages()
  }

  ngOnInit() {
    this.deckService.userCanBack()

    this.isUserAbleToContinue()
  }

  isUserAbleToContinue() {
    if (this.deckService.getStructureFailure() === undefined) {
      this.deckService.userCannotContinue()
    } else {
      this.deckService.userCanContinue()
    }
  }

  initTitles() {
    this.titles = [
      "Cracking",
      "Partially Collapsed",
      "Fully Collapsed",
    ]
  }

  initImages() {
    switch (this.deckService.getDeckSubType()) {
      case 'structure':
        this.images = [
          "../../../../assets/decks/earthquake/structure/StructureFailure_1.png",
          "../../../../assets/decks/earthquake/structure/StructureFailure_2.png",
          "../../../../assets/decks/earthquake/structure/StructureFailure_3.png",
        ]; break;
      case 'wind':
        this.images = [
          "../../../../assets/decks/wind/windstructure/Graphic_Cracking.png",
          "../../../../assets/decks/wind/windstructure/Graphic_PartialCollapse.png",
          "../../../../assets/decks/wind/windstructure/Graphic_TotalCollapse.png",
        ]; break;
    }
  }

  ngAfterViewChecked() {
    this.setStructureFailure(this.deckService.getStructureFailure() || 0, 'service')
    this.cdRef.detectChanges()
  }

  onInputChange(value): void {
    this.deckService.userCanContinue()

    this.setStructureFailure(value, 'input')
  }

  setStructureFailure(value, from: 'input' | 'service'): void {
    const intValue = parseInt(value)
    const leftArrow = document.querySelector('.left-arrow') as HTMLDivElement
    const rightArrow = document.querySelector('.right-arrow') as HTMLDivElement
    const slider = document.querySelector('.structure__slider-range') as HTMLInputElement

    this.structure = intValue
    this.title = this.titles[intValue]
    this.image = this.images[intValue]

    // Fallback, if user not use the input to change the value,
    // don't change the value in service yet
    if (from === 'service' && this.deckService.getStructureFailure() === undefined) {
      this.deckService.setStructureFailure(undefined)
    } else {
      this.deckService.setStructureFailure(intValue)
    }

    leftArrow.style.left = countArrowOffset(intValue, 2, slider.offsetWidth, 'left')
    rightArrow.style.left = countArrowOffset(intValue, 2, slider.offsetWidth, 'right')
  }
}
