import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';

import { DeckService } from '../../../services/cards/deck.service';
import { countArrowOffset } from '../../../utils/slider'

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss']
})
export class AccessibilityComponent implements AfterViewChecked {
  images: string[]

  stage: number
  image: string
  accessibility: number
  displayNumber: number

  constructor(
    public deckService: DeckService,
    public cdref: ChangeDetectorRef
  ) {
    this.initImages()

    this.deckService.userCanBack()
    this.checkIsUserAbleToContinue()
  }

  ngAfterViewChecked() {
    this.setAccessibility(this.deckService.getAccessibility() || 0, 'service')
    this.cdref.detectChanges()
  }

  checkIsUserAbleToContinue() {
    if (this.deckService.getAccessibility() === undefined) {
      this.deckService.userCannotContinue()
    } else {
      this.deckService.userCanContinue()
    }
  }

  initImages() {
    this.images = [
      "../../../../assets/decks/earthquake/accessibility/Access_1.png",
      "../../../../assets/decks/earthquake/accessibility/Access_2.png",
      "../../../../assets/decks/earthquake/accessibility/Access_3.png",
      "../../../../assets/decks/earthquake/accessibility/Access_4.png",
      "../../../../assets/decks/earthquake/accessibility/Access_5.png",
    ]
  }

  onInputChange(value): void {
    this.deckService.userCanContinue()

    this.setAccessibility(value, 'input')
  }

  public setAccessibility(inputValue, from: 'service' | 'input'): void {
    const intValue = parseFloat(inputValue)

    const output = document.querySelector('.accessibility__slider-output') as HTMLDivElement
    const input = document.querySelector('.accessibility__slider-range') as HTMLInputElement
    const leftArrow = document.querySelector('.left-arrow') as HTMLDivElement
    const rightArrow = document.querySelector('.right-arrow') as HTMLDivElement

    let displayNumber: number;

    switch (intValue) {
      case 0: displayNumber = 0.5; break;
      case 1: displayNumber = 1.0; break;
      case 2: displayNumber = 1.4; break;
      case 3: displayNumber = 1.8; break;
      case 4: displayNumber = 2.2; break;
    }

    this.image = this.images[intValue]
    this.stage = intValue + 1
    this.accessibility = intValue
    this.displayNumber = displayNumber

    if (this.deckService.getAccessibility() === undefined && from === 'service') {
      this.deckService.setAccessibility(undefined)
    } else {
      this.deckService.setAccessibility(intValue)
    }

    output.style.left = (intValue / 4.4) * input.offsetWidth + 'px'
    leftArrow.style.left = countArrowOffset(intValue, 4, input.offsetWidth, 'left')
    rightArrow.style.left = countArrowOffset(intValue, 4, input.offsetWidth, 'right')
  }
}
