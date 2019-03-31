import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { countArrowOffset } from '../../../utils/slider'
import { DeckService } from '../../../services/cards/deck.service';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements AfterViewChecked {
  titles: string[]
  images: string[]
  
  title: string
  image: string
  structure: number

  constructor(
    public deckService: DeckService,
    private cdRef: ChangeDetectorRef
  ) {
    this.initTitles()
    this.initImages()
  }

  initTitles() {
    this.titles = [
      "Cracking",
      "Partially Collapsed",
      "Fully Collapsed",
    ]
  }

  initImages() {
    switch (this.deckService.getDeckSubType()) {
      case 'structure':
        this.images = [
          "../../../../assets/decks/earthquake/structure/StructureFailure_1.png",
          "../../../../assets/decks/earthquake/structure/StructureFailure_2.png",
          "../../../../assets/decks/earthquake/structure/StructureFailure_3.png",
        ]; break;
      case 'wind':
        this.images = [
          "../../../../assets/decks/wind/windstructure/Graphic_Cracking.png",
          "../../../../assets/decks/wind/windstructure/Graphic_PartialCollapse.png",
          "../../../../assets/decks/wind/windstructure/Graphic_TotalCollapse.png",
        ]; break;
    }
  }

  ngAfterViewChecked() {
    this.setStructureFailure(this.deckService.getStructureFailure())
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

    this.deckService.setStructureFailure(intValue)
    leftArrow.style.left = countArrowOffset(intValue, 2, slider.offsetWidth, 'left')
    rightArrow.style.left = countArrowOffset(intValue, 2, slider.offsetWidth, 'right')
  }
}
