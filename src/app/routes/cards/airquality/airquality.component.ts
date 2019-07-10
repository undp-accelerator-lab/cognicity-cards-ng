import { Component, OnInit } from "@angular/core";
import { DeckService } from '../../../services/cards/deck.service'

@Component({
  selector: "app-airquality",
  templateUrl: "./airquality.component.html",
  styleUrls: ["./airquality.component.scss"]
})
export class AirqualityComponent implements OnInit {

  facts: string[]

  constructor(private deckService: DeckService) {
    this.initFacts()
  }

  ngOnInit() {
    this.deckService.userCanBack()

    if (this.deckService.getAirQuality() === undefined) {
      this.deckService.userCannotContinue()
    } else {
      this.deckService.userCanContinue()
    }
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
    return this.deckService.getAirQuality() || 0;
  }

  onInputChange(value): void {
    this.deckService.userCanContinue()

    this.setAirQuality(value)
  }

  public setAirQuality(value): void {
    this.deckService.setAirQuality(parseInt(value));
  }
}
