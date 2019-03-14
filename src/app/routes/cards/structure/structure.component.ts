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

  public setStructureFailure(value): void {
    const intValue = parseInt(value)

    this.structure = intValue
    this.title = this.titles[intValue]
    this.image = this.images[intValue]

    this.structureService.setStructureFailure(intValue)
  }
}
