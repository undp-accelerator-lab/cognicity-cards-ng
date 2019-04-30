import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evacuationnumber',
  templateUrl: './evacuationnumber.component.html',
  styleUrls: ['./evacuationnumber.component.scss']
})
export class EvacuationnumberComponent implements OnInit {
  selectedOption = null

  constructor() { }

  ngOnInit() {}

  onOptionClick(option: number) {
    this.selectedOption = option
  }
}
