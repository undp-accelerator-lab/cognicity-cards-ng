import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  selectedOption = []

  constructor() { }

  ngOnInit() {}

  onOptionClick(option: number) {
    if (this.selectedOption.includes(option)) {
      this.selectedOption = this.selectedOption.filter(o => o !== option)
    } else {
      this.selectedOption.push(option)
    }
  }
}
