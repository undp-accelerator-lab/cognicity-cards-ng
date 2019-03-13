import { Component } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent {
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

  constructor() {
    this.structure = 1
    this.title = this.titles[this.structure]
    this.image = this.images[this.structure]
  }

  public onRangeChange(event): void {
    this.structure = event.target.value
    this.title = this.titles[event.target.value]
    this.image = this.images[event.target.value]
  }
}
