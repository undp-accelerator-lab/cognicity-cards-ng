import { Component } from '@angular/core';
import { HazeService } from '../../../services/cards/fire/haze.service'

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.scss']
})
export class VisibilityComponent {
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
