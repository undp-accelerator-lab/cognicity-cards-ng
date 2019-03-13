import { Component } from '@angular/core';
import { StructureService } from '../../../services/cards/earthquake/structure.service';

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

  constructor(
    public structureService: StructureService
  ) {
    this.setStructureFailure(structureService.getStructureFailure())
  }

  public setStructureFailure(value: number): void {
    this.structure = value
    this.title = this.titles[value]
    this.image = this.images[value]

    this.structureService.setStructureFailure(value)
  }
}
