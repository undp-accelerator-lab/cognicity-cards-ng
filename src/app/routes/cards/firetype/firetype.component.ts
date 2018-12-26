import { Component } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-firetype',
  templateUrl: './firetype.component.html',
  styleUrls: ['./firetype.component.scss']
})
export class FiretypeComponent {

  constructor() { }

  fireButtonImage = "../../../../assets/decks/fire/firetype/AddFireReport.png"
  hazeButtonImage = "../../../../assets/decks/fire/firetype/AddHazeReport.png"

  highlightImage(event: MouseEvent, type: string) {
    switch (type) {
      case "fire": {
        this.fireButtonImage === "../../../../assets/decks/fire/firetype/AddFireReport.png" 
          ? this.fireButtonImage = "../../../../assets/decks/fire/firetype/AddFireReport_Highlight.png" 
          : this.fireButtonImage = "../../../../assets/decks/fire/firetype/AddFireReport.png";
        break; 
      }
      case "haze": {
        this.hazeButtonImage === "../../../../assets/decks/fire/firetype/AddHazeReport.png" 
          ? this.hazeButtonImage = "../../../../assets/decks/fire/firetype/AddHazeReport_Highlight.png" 
          : this.hazeButtonImage = "../../../../assets/decks/fire/firetype/AddHazeReport.png";
        break;
      }
      default: break;
    }
  }

}
