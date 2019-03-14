import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../services/cards/deck.service'

@Component({
  selector: 'app-report-review',
  templateUrl: './report-review.component.html',
  styleUrls: ['./report-review.component.scss']
})
export class ReportReviewComponent implements OnInit {

  constructor(private deckService: DeckService) { }

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

}
