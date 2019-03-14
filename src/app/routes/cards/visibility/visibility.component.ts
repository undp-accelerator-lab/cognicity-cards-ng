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

  get visibility(): number {
    return this.hazeService.getHazeVisibility()
  }

  public onRangeChange(value: string): void {
    const intValue = parseInt(value)
    
    this.hazeService.setHazeVisibility(intValue)
    this.description = this.descriptions[intValue]
    this.image = this.images[intValue]
  }
}
