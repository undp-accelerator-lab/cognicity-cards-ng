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

    if (intValue <= 0.5) { stage = 1; } 
    else if (intValue <= 1.0) { stage = 2; } 
    else if (intValue <= 1.4) { stage = 3; } 
    else if (intValue <= 1.8) { stage = 4; } 
    else { stage = 5; }

    this.image = this.images[stage - 1]
    this.stage = stage
    this.accessibility = intValue

    this.deckService.setAccessibility(intValue)

    output.style.left = (intValue / 2.4) * input.offsetWidth + 'px'
    leftArrow.style.left = countArrowOffset(intValue, 2.2, input.offsetWidth, 'left')
    rightArrow.style.left = countArrowOffset(intValue, 2.2, input.offsetWidth, 'right')
  }
}
