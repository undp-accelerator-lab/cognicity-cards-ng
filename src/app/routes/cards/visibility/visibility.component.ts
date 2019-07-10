import { Component, AfterViewChecked, ChangeDetectorRef, OnInit } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service';
import { countArrowOffset } from '../../../utils/slider'

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.scss']
})
export class VisibilityComponent implements OnInit, AfterViewChecked {
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

  ngOnInit() {
    this.deckService.userCanBack()

    this.isUserAbleToContinue()
  }

  isUserAbleToContinue() {
    if (this.deckService.getVisibility() === undefined) {
      this.deckService.userCannotContinue()
    } else {
      this.deckService.userCanContinue()
    }
  }

  initDescriptions() {
    this.descriptions = [
      "I can still see but I need to wear a mask.",
      "I can still see but not clear enough to drive.",
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
    return this.deckService.getVisibility() || 0
  }

  ngAfterViewChecked() {
    this.onVisibility(this.deckService.getVisibility() || 0, 'service')
    this.cdref.detectChanges()
  }

  onInputChange(value): void {
    this.deckService.userCanContinue()

    this.onVisibility(value, 'input')
  }

  public onVisibility(value, from: 'service' | 'input'): void {
    const leftArrow = document.querySelector('.left-arrow') as HTMLDivElement
    const rightArrow = document.querySelector('.right-arrow') as HTMLDivElement
    const slider = document.querySelector('.visibility__range') as HTMLInputElement

    const intValue = parseInt(value)
    
    this.description = this.descriptions[intValue]
    this.image = this.images[intValue]

    if (from === 'service' && this.deckService.getVisibility() === undefined) {
      this.deckService.setVisibility(undefined)
    } else {
      this.deckService.setVisibility(intValue)
    }

    leftArrow.style.left = countArrowOffset(intValue, 2, slider.offsetWidth, 'left')
    rightArrow.style.left = countArrowOffset(intValue, 2,  slider.offsetWidth, 'right')
  }
}
