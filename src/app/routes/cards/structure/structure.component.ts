import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { StructureService } from '../../../services/cards/earthquake/structure.service';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements AfterViewChecked {
  titles = [
    "Cracking",
    "Partially Collapsed",
    "Fully Collapsed",
  ]

  images = [
    "../../../../assets/decks/earthquake/structure/StructureFailure_1.png",
    "../../../../assets/decks/earthquake/structure/StructureFailure_2.png",
    "../../../../assets/decks/earthquake/structure/StructureFailure_3.png",
  ]

  title: string
  image: string
  structure: number

  constructor(
    public structureService: StructureService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewChecked() {
    this.setStructureFailure(this.structureService.getStructureFailure())
    this.cdRef.detectChanges()
  }

  public setStructureFailure(value): void {
    const intValue = parseInt(value)
    const leftArrow = document.querySelector('.left-arrow') as HTMLDivElement
    const rightArrow = document.querySelector('.right-arrow') as HTMLDivElement
    const slider = document.querySelector('.structure__slider-range') as HTMLInputElement

    this.structure = intValue
    this.title = this.titles[intValue]
    this.image = this.images[intValue]

    this.structureService.setStructureFailure(intValue)
    leftArrow.style.left = this.countArrowOffset(intValue, slider.offsetWidth, 'left')
    rightArrow.style.left = this.countArrowOffset(intValue, slider.offsetWidth, 'right')
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
