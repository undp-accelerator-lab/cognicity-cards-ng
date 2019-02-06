import { Component } from '@angular/core';
import { HazeService } from '../../../services/cards/fire/haze.service'

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.scss']
})
export class VisibilityComponent {
  descriptions = [
    "Bisa melihat jelas tapi butuh masker hidung",
    "Bisa melihat tapi kurang jelas untuk berkendara",
    "Sulit melihat. Terlalu bahaya untuk keluar",
  ]

  images = [
    "../../../../assets/decks/fire/visibility/Visibility_High.jpg",
    "../../../../assets/decks/fire/visibility/Visibility_Medium.jpg",
    "../../../../assets/decks/fire/visibility/Visibility_Low.jpg",
  ]

  description: string
  image: string

  constructor(private hazeService: HazeService) {
    this.description = this.descriptions[hazeService.getHazeVisibility()]
    this.image = this.images[hazeService.getHazeVisibility()]
  }

  get visibility(): string {
    return this.hazeService.getHazeVisibility()
  }

  public onRangeChange(event): void {
    this.hazeService.setHazeVisibility(event.target.value)
    switch (event.target.value) {
      case "0":
        this.description = this.descriptions[0]
        this.image = this.images[0]
        break;
      case "1":
        this.description = this.descriptions[1]
        this.image = this.images[1]
        break;
      case "2":
        this.description = this.descriptions[2]
        this.image = this.images[2]
        break;
    }
  }
}
