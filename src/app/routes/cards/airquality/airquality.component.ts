import { Component } from "@angular/core";
import { HazeService } from "../../../services/cards/fire/haze.service";

@Component({
  selector: "app-airquality",
  templateUrl: "./airquality.component.html",
  styleUrls: ["./airquality.component.scss"]
})
export class AirqualityComponent {
  constructor(private hazeService: HazeService) {}

  facts: string[] = [
    "None",
    "Smell Smoke",
    "Watery Eyes / Throat Irritation",
    "Headache / Nauseous",
    "Shortness of Breath / Chest Tightness"
  ];

  fact: string = this.facts[2];

  get rangeValue(): string {
    return this.hazeService.getAirQuality();
  }

  public onRangeChanged(event): void {
    this.hazeService.setAirQuality(event.target.value);
  }

  public onFactClicked(value: string, range): void {
    range.value = value;
    this.hazeService.setAirQuality(value);
  }
}
