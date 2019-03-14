import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../services/cards/deck.service'
import { FireService } from '../../services/cards/fire/fire.service';
import { HazeService } from '../../services/cards/fire/haze.service';

@Component({
  selector: 'app-report-review',
  templateUrl: './report-review.component.html',
  styleUrls: ['./report-review.component.scss']
})
export class ReportReviewComponent implements OnInit {

  constructor(
    private deckService: DeckService,
    private fireService: FireService,
    private hazeService: HazeService
  ) { }

  ngOnInit() {
    if (this.deckService.getPreview()) {
      this.setImagePreview(this.deckService.getPreview())
    } else {
      document
        .getElementById('preview-img')
        .setAttribute('src', 'https://via.placeholder.com/150')
    }
  }

  setImagePreview(file: File) {
    const reader = new FileReader()
    reader.onload = function (e: any) {
      document
        .getElementById('preview-img')
        .setAttribute('src', e.target.result)
    }
    reader.readAsDataURL(file)
  }

  get description() {
    return this.deckService.getDescription()
  }

  get deckType() {
    return this.deckService.getDeckType()
  }

  get fireRange() {
    const radius = this.fireService.getCircleRadius()
    const range = Math.PI * Math.pow(radius, 2) / 10000
    
    if (range < 1) return '<1'
    return range.toFixed(2)
  }

  get airQuality() {
    const quality = this.hazeService.getAirQuality()

    switch(quality) {
      case 0: return ''
      case 1: return 'Moderate'
      case 2: return 'Poor'
      case 3: return 'Severe'
      case 4: return 'Hazardous'
    }
  }

  get visibility() {
    const visibleValue = this.hazeService.getHazeVisibility()

    switch (visibleValue) {
      case 0: return 'High'
      case 1: return 'Moderate'
      case 2: return 'Low'
    }
  }
}
