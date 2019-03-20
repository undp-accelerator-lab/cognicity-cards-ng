import { Component, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { RoadService } from '../../../services/cards/earthquake/road.service';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent implements AfterViewChecked {
  titles = [
    "Light Disturbance",
    "Moderate Disturbance",
    "Heavy Disturbance",
  ]

  subtitles = [
    "Small Road Cracks, Few Obstacles, Partial Access",
    "Large Road Cracks, Partially Blocked, Limited Access",
    "Destroyed Road, Completely Blocked, No access",
  ]

  images = [
    "../../../../assets/decks/earthquake/condition/RoadCondition_1.png",
    "../../../../assets/decks/earthquake/condition/RoadCondition_2.png",
    "../../../../assets/decks/earthquake/condition/RoadCondition_3.png",
  ]

  title: string
  subtitle: string
  image: string
  condition: number

  constructor(
    private roadService: RoadService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewChecked() {
    this.setRoadCondition(this.roadService.getRoadCondition())
    this.cdRef.detectChanges()
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

    this.roadService.setRoadCondition(this.condition)
    leftArrow.style.left = this.countArrowOffset(intCondition, slider.offsetWidth, 'left')
    rightArrow.style.left = this.countArrowOffset(intCondition, slider.offsetWidth, 'right')
  }

  private countArrowOffset(
    inputValue: number, 
    sliderWidth: number, 
    type: 'left' | 'right'
  ): string {
    const circleThumbDiameter = 25 //px

    const circleThumbRadius = circleThumbDiameter / 2
    const circleThumbPosition = inputValue * sliderWidth / 2

    const arrowOffsetRelative = (type === 'left' ? 
      circleThumbRadius - circleThumbDiameter : 
      circleThumbRadius + circleThumbDiameter
    )
    const arrowOffsetAbsolute = circleThumbRadius * inputValue

    return `${arrowOffsetRelative + circleThumbPosition - arrowOffsetAbsolute}px`
  }
}
