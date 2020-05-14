import { Component, ChangeDetectorRef, AfterViewChecked } from '@angular/core';

import { countArrowOffset } from '../../../utils/slider'
import { DeckService } from '../../../services/cards/deck.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent implements AfterViewChecked {
  titles: string[]
  subtitles: string[]
  images: string[]

  title: string
  subtitle: string
  image: string
  condition: number

  constructor(
    private deckService: DeckService,
    public translate: TranslateService,
    private cdRef: ChangeDetectorRef
  ) {
    this.initTitles()
    this.initSubtitles()
    this.initImages()

    this.deckService.userCanBack()
    this.checkIsUserAbleToContinue()
  }

  ngAfterViewChecked() {
    this.setRoadCondition(this.deckService.getCondition() || 0, 'service')
    this.cdRef.detectChanges()
  }

  checkIsUserAbleToContinue() {
    if (this.deckService.getCondition() === undefined) {
      this.deckService.userCannotContinue()
    } else {
      this.deckService.userCanContinue()
    }
  }

  initTitles() {
    this.titles = [
      "card.condition.0.title",
      "card.condition.1.title",
      "card.condition.2.title",
    ]
  }

  initSubtitles() {
    this.subtitles = [
      "card.condition.0.subtitle",
      "card.condition.1.subtitle",
      "card.condition.2.subtitle",
    ]
  }

  initImages() {
    this.images = [
      "../../../../assets/decks/earthquake/condition/RoadCondition_1.png",
      "../../../../assets/decks/earthquake/condition/RoadCondition_2.png",
      "../../../../assets/decks/earthquake/condition/RoadCondition_3.png",
    ]
  }

  onInputChange(value): void {
    this.deckService.userCanContinue()

    this.setRoadCondition(value, 'input')
  }

  public setRoadCondition(condition, from: 'service' | 'input'): void {
    const leftArrow = document.querySelector('.left-arrow') as HTMLDivElement
    const rightArrow = document.querySelector('.right-arrow') as HTMLDivElement
    const slider = document.querySelector('.condition__range') as HTMLInputElement
    
    const intCondition = parseInt(condition)

    this.condition = intCondition
    this.title = this.titles[intCondition]
    this.image = this.images[intCondition]
    this.subtitle = this.subtitles[intCondition]

    if (this.deckService.getCondition() === undefined && from === 'service') {
      this.deckService.setCondition(undefined)
    } else {
      this.deckService.setCondition(intCondition)
    }

    leftArrow.style.left = countArrowOffset(intCondition, 2, slider.offsetWidth, 'left')
    rightArrow.style.left = countArrowOffset(intCondition, 2, slider.offsetWidth, 'right')
  }
}
