import { Component, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { countArrowOffset } from '../../../utils/slider'
import { DeckService } from '../../../services/cards/deck.service';

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
    private cdRef: ChangeDetectorRef
  ) {
    this.initTitles()
    this.initSubtitles()
    this.initImages()
  }

  ngAfterViewChecked() {
    this.setRoadCondition(this.deckService.getCondition())
    this.cdRef.detectChanges()
  }

  initTitles() {
    this.titles = [
      "Light Disturbance",
      "Moderate Disturbance",
      "Heavy Disturbance",
    ]
  }

  initSubtitles() {
    this.subtitles = [
      "Small Road Cracks, Few Obstacles, Partial Access",
      "Large Road Cracks, Partially Blocked, Limited Access",
      "Destroyed Road, Completely Blocked, No access",
    ]
  }

  initImages() {
    this.images = [
      "../../../../assets/decks/earthquake/condition/RoadCondition_1.png",
      "../../../../assets/decks/earthquake/condition/RoadCondition_2.png",
      "../../../../assets/decks/earthquake/condition/RoadCondition_3.png",
    ]
  }

  public setRoadCondition(condition): void {
    const intCondition = parseInt(condition)
    const leftArrow = document.querySelector('.left-arrow') as HTMLDivElement
    const rightArrow = document.querySelector('.right-arrow') as HTMLDivElement
    const slider = document.querySelector('.condition__range') as HTMLInputElement

    this.condition = intCondition
    this.title = this.titles[intCondition]
    this.image = this.images[intCondition]
    this.subtitle = this.subtitles[intCondition]

    this.deckService.setCondition(this.condition)
    leftArrow.style.left = countArrowOffset(intCondition, 2, slider.offsetWidth, 'left')
    rightArrow.style.left = countArrowOffset(intCondition, 2, slider.offsetWidth, 'right')
  }
}
