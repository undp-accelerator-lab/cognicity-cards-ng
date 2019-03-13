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

  stage: number = 1
  image: string = this.images[0]
  accessibility: number = 0

  constructor() {}

  public onRangeChange(event): void {
    const inputValue = event.target.value
    let stage;

    if (inputValue <= 0.5) {
      stage = 1;
    } else if (inputValue <= 1.0) {
      stage = 2;
    } else if(inputValue <= 1.4) {
      stage = 3;
    } else if (inputValue <= 1.8) {
      stage = 4;
    } else {
      stage = 5;
    }

    this.image = this.images[stage - 1]
    this.stage = stage
    this.accessibility = inputValue
  }
}
