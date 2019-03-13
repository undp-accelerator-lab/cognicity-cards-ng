import { Component } from '@angular/core';
import { RoadService } from '../../../services/cards/earthquake/road.service';

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

  constructor(
    private roadService: RoadService
  ) {
    this.setRoadCondition(roadService.getRoadCondition())
  }

  public setRoadCondition(condition): void {
    this.condition = condition
    this.title = this.titles[condition]
    this.image = this.images[condition]
    this.subtitle = this.subtitles[condition]

    this.roadService.setRoadCondition(this.condition)
  }
}
