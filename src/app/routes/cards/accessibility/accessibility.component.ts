import { Component } from '@angular/core';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss']
})
export class AccessibilityComponent {
  images = [
    "../../../../assets/decks/earthquake/accessibility/Access_1.png",
    "../../../../assets/decks/earthquake/accessibility/Access_2.png",
    "../../../../assets/decks/earthquake/accessibility/Access_3.png",
    "../../../../assets/decks/earthquake/accessibility/Access_4.png",
    "../../../../assets/decks/earthquake/accessibility/Access_5.png",
  ]

  image: string
  accessibility: number

  constructor() {
    this.accessibility = 0
    this.image = this.images[0]
  }

  public onRangeChange(event): void {
    const inputValue = event.target.value

    if (inputValue <= 0.5) {
      this.image = this.images[0]
    } else if (inputValue <= 1.0) {
      this.image = this.images[1]
    } else if(inputValue <= 1.4) {
      this.image = this.images[2]
    } else if (inputValue <= 1.8) {
      this.image = this.images[3]
    } else {
      this.image = this.images[4]
    }
  }
}
