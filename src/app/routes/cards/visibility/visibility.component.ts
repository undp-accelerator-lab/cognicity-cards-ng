import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { HazeService } from '../../../services/cards/fire/haze.service'

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.scss']
})
export class VisibilityComponent implements AfterViewChecked {
  descriptions = [
    "I can still see but I need to wear a mask.",
    "I can still see but not clean enough to drive.",
    "I can barely see. Too dangerous to go out."
  ]

  images = [
    "../../../../assets/decks/fire/visibility/Visibility_High.jpg",
    "../../../../assets/decks/fire/visibility/Visibility_Medium.jpg",
    "../../../../assets/decks/fire/visibility/Visibility_Low.jpg",
  ]

  description: string
  image: string

  constructor(
    private hazeService: HazeService,
    private cdref: ChangeDetectorRef
  ) {}

  get visibility(): number {
    return this.hazeService.getHazeVisibility()
  }

  ngAfterViewChecked() {
    this.onRangeChange(this.hazeService.getHazeVisibility().toString())
    this.cdref.detectChanges()
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

  public onRangeChange(value: string): void {
    const leftArrow = document.querySelector('.left-arrow') as HTMLDivElement
    const rightArrow = document.querySelector('.right-arrow') as HTMLDivElement
    const slider = document.querySelector('.visibility__range') as HTMLInputElement

    const intValue = parseInt(value)
    
    this.hazeService.setHazeVisibility(intValue)
    this.description = this.descriptions[intValue]
    this.image = this.images[intValue]

    leftArrow.style.left = this.countArrowOffset(intValue, slider.offsetWidth, 'left')
    rightArrow.style.left = this.countArrowOffset(intValue, slider.offsetWidth, 'right')
  }
}
