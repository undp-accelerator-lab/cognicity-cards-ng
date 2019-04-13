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
  }

  ngAfterViewChecked() {
    this.onRangeChange(this.deckService.getAccessibility().toString())
    this.cdref.detectChanges()
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

  public onRangeChange(inputValue: string): void {
    const intValue = parseFloat(inputValue)

    const output = document.querySelector('.accessibility__slider-output') as HTMLDivElement
    const input = document.querySelector('.accessibility__slider-range') as HTMLInputElement
    const leftArrow = document.querySelector('.left-arrow') as HTMLDivElement
    const rightArrow = document.querySelector('.right-arrow') as HTMLDivElement

    let stage: number;
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

    this.deckService.setAccessibility(intValue)

    output.style.left = (intValue / 4.4) * input.offsetWidth + 'px'
    leftArrow.style.left = countArrowOffset(intValue, 4, input.offsetWidth, 'left')
    rightArrow.style.left = countArrowOffset(intValue, 4, input.offsetWidth, 'right')
  }
}
