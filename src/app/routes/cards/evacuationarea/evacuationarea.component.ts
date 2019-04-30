import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evacuationarea',
  templateUrl: './evacuationarea.component.html',
  styleUrls: ['./evacuationarea.component.scss']
})
export class EvacuationareaComponent implements OnInit {
  selectedOption = null

  constructor() { }

  ngOnInit() {}

  onOptionClick(option: boolean) {
    this.selectedOption = option
  }
}
