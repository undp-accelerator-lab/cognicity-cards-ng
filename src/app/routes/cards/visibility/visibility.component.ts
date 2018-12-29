import { Component } from '@angular/core';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.scss']
})
export class VisibilityComponent {

  descriptions = [
    "Bisa melihat jelas tapi butuh masker hidung",
    "Bisa melihat tapi kurang jelas untuk berkendara",
    "Sulit melihat. Terlalu bahaya untuk keluar",
  ]

  images = [
    "../../../../assets/decks/fire/visibility/Visibility_High.jpg",
    "../../../../assets/decks/fire/visibility/Visibility_Medium.jpg",
    "../../../../assets/decks/fire/visibility/Visibility_Low.jpg",    
  ]

  description: string = this.descriptions[1]
  image: string = this.images[1]

  constructor() { }

  public onRangeChange(event): void {
    switch(event.target.value) {
      case "0":
        this.description = this.descriptions[0]
        this.image = this.images[0]
        break;
      case "1":
        this.description = this.descriptions[1]
        this.image = this.images[1]
        break;
      case "2":
        this.description = this.descriptions[2]
        this.image = this.images[2]
        break;
    }
  }
}
