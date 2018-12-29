import { Component } from '@angular/core';

@Component({
  selector: 'app-airquality',
  templateUrl: './airquality.component.html',
  styleUrls: ['./airquality.component.scss']
})
export class AirqualityComponent {

  facts: string[] = [
    "None",
    "Tercium Bau Asap",
    "Mata Pedih / Radang Tenggorokan",
    "Pusing / Mual",
    "Sesak Nafas / Dada Nyeri"
  ]

  fact: string = this.facts[2]

  constructor() { }

}
