import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {
  @Input() title: string;
  @Input() tabs: number[];
  @Input() color: string;
  @Input() deck: string;
  totalTabs: number[];

  constructor() { }

  getCssClass(i) {
    if (this.deck === 'wind') return i <= this.tabs[1] ? 'tabs filled ' : 'tabs'
    return i < this.tabs[1] ? 'tabs filled ' : 'tabs'
  }

  get isShowTabs(): boolean {
    if (this.deck === 'wind') {
      return this.tabs[1] < this.totalTabs.length
    }
    return this.tabs[1] > 0 && this.tabs[1] <= this.totalTabs.length
    
  }

  ngOnInit() {
    let totalTabs;
    if (this.deck === 'wind') {
      totalTabs = this.tabs[0] - 1
    } else {
      totalTabs = this.tabs[0] - 2
    }

    this.totalTabs = Array(totalTabs)
    .fill(1).map((x, i) => x + i);
  }

}
