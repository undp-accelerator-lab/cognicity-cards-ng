import { Component } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent {
  titles = [
    "Light Disturbance",
    "Moderate Disturbance",
    "Heavy Disturbance",
  ]

  subtitles = [
    "Small Road Cracks, Few Obstacles, Partial Access",
    "Large Road Cracks, Partially Blocked, Limited Access",
    "Destroyed Road, Completely Blocked, No access",
  ]

  images = [
    "../../../../assets/decks/earthquake/condition/RoadCondition_1.png",
    "../../../../assets/decks/earthquake/condition/RoadCondition_2.png",
    "../../../../assets/decks/earthquake/condition/RoadCondition_3.png",
  ]

  title: string
  subtitle: string
  image: string
  condition: number

  constructor() {
    this.condition = 1
    this.title = this.titles[this.condition]
    this.subtitle = this.subtitles[this.condition]
    this.image = this.images[this.condition]
  }

  public onRangeChange(event): void {
    this.condition = event.target.value
    this.title = this.titles[event.target.value]
    this.image = this.images[event.target.value]
    this.subtitle = this.subtitles[event.target.value]
  }
}
