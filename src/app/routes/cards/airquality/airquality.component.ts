import { Component } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { range } from 'rxjs';
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
    this.rangeValue = event.target.value
  }

  public onFactClicked(value: string, range) {
    range.value = value;
    this.rangeValue = value;
  }

  constructor() { }
}
