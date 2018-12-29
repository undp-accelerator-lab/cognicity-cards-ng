import { Component } from '@angular/core';
import { TagContentType } from '@angular/compiler';
import { TargetLocator } from 'selenium-webdriver';

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
  rangeValue: string = 0

  public onRangeChanged(event) {
    console.log(event.target.value)
    this.rangeValue = event.target.value
  }

  constructor() { }

}
