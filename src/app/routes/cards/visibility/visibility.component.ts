import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service';
import { countArrowOffset } from '../../../utils/slider'

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.scss']
})
export class VisibilityComponent implements AfterViewChecked {
  descriptions: string[]
  images: string[]

  description: string
  image: string

  constructor(
    private deckService: DeckService,
    private cdref: ChangeDetectorRef
  ) {
    this.initDescriptions()
    this.initImages()
  }

  initDescriptions() {
    this.descriptions = [
      "I can still see but I need to wear a mask.",
      "I can still see but not clean enough to drive.",
      "I can barely see. Too dangerous to go out."
    ]
  }

  initImages() {
    this.images = [
      "../../../../assets/decks/fire/visibility/Visibility_High.jpg",
      "../../../../assets/decks/fire/visibility/Visibility_Medium.jpg",
      "../../../../assets/decks/fire/visibility/Visibility_Low.jpg",
    ]
  }

  get visibility(): number {
    return this.deckService.getVisibility()
  }

  ngAfterViewChecked() {
    this.onRangeChange(this.deckService.getVisibility().toString())
    this.cdref.detectChanges()
  }

  public onRangeChange(value: string): void {
    const leftArrow = document.querySelector('.left-arrow') as HTMLDivElement
    const rightArrow = document.querySelector('.right-arrow') as HTMLDivElement
    const slider = document.querySelector('.visibility__range') as HTMLInputElement

    const intValue = parseInt(value)
    
    this.deckService.setVisibility(intValue)
    this.description = this.descriptions[intValue]
    this.image = this.images[intValue]

    leftArrow.style.left = countArrowOffset(intValue, 2, slider.offsetWidth, 'left')
    rightArrow.style.left = countArrowOffset(intValue, 2,  slider.offsetWidth, 'right')
  }
}
