import { Component } from "@angular/core";
import { DeckService } from '../../../services/cards/deck.service'

@Component({
  selector: "app-airquality",
  templateUrl: "./airquality.component.html",
  styleUrls: ["./airquality.component.scss"]
})
export class AirqualityComponent {

  facts: string[]

  constructor(private deckService: DeckService) {
    this.initFacts()
  }

  initFacts() {
    this.facts = [
      "None",
      "Smell Smoke",
      "Watery Eyes / Throat Irritation",
      "Headache / Nauseous",
      "Shortness of Breath / Chest Tightness"
    ]
  }

  get rangeValue(): number {
    return this.deckService.getAirQuality();
  }

  public changeAirQuality(value): void {
    this.deckService.setAirQuality(parseInt(value));
  }
}
