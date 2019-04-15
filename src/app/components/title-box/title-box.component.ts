import { Component, Input } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent {
  @Input() title: string;
  @Input() deck: string;

  constructor(public navController: NavigationService) { }

  getCssClass(i) {
    if (this.deck === 'earthquake') return i < this.navController.tabs[1] ? 'tabs filled ' : 'tabs'
    return i <= this.navController.tabs[1] ? 'tabs filled ' : 'tabs'
  }

  get isShowTabs(): boolean {
    if (this.deck === 'earthquake') {
      return this.navController.tabs[1] > 0 && this.navController.tabs[1] <= this.totalTabs.length
    }
    return this.navController.tabs[1] < this.totalTabs.length
  }

  get totalTabs(): number[] {
    let offset;
    if (this.deck === 'earthquake') offset = 2
    else offset = 1

    return Array(this.navController.tabs[0] - offset).fill(1).map((x, i) => x + i);
  }
}
