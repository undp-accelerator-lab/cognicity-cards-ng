import { Component, OnInit } from "@angular/core";
import { DeckService } from '../../../services/cards/deck.service'
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-airquality",
  templateUrl: "./airquality.component.html",
  styleUrls: ["./airquality.component.scss"]
})
export class AirqualityComponent implements OnInit {

  facts: string[]

  constructor(
    private deckService: DeckService,
    public translate: TranslateService
    ) {
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
      "card.airquality.card.0",
      "card.airquality.card.1",
      "card.airquality.card.2",
      "card.airquality.card.3",
      "card.airquality.card.4",
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
