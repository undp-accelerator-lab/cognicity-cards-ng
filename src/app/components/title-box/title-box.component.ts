import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {
  @Input() title: string;
  @Input() tabs: number[];
  totalTabs: number[];

  constructor() { }

  ngOnInit() {
    this.totalTabs = Array(this.tabs[0])
    .fill(0).map((x, i) => x + i);
  }

}
