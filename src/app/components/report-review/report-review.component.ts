import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';

import { DeckService } from '../../services/cards/deck.service'

@Component({
  selector: 'app-report-review',
  templateUrl: './report-review.component.html',
  styleUrls: ['./report-review.component.scss']
})
export class ReportReviewComponent implements OnInit, AfterViewChecked {

  previewImg: HTMLImageElement
  previewImgContainer: HTMLDivElement

  constructor(
    public deckService: DeckService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.initPreviewImg()

  }
  ngAfterViewChecked() {
    if (this.deckService.getDeckSubType() === 'haze') this.initHazeReview()
    this.cdRef.detectChanges()
  }

  initPreviewImg() {
    this.previewImg = document.getElementById('preview-img') as HTMLImageElement
    this.previewImgContainer = document.getElementById('preview-img-container') as HTMLDivElement

    if (this.deckService.getPreview()) {
      this.setImagePreview(this.deckService.getPreview())
    } else {
      let previewImgSrc
      switch (this.deckService.getDeckSubType()) {
        case 'fire': previewImgSrc = '../../../assets/decks/fire/review/Fire.png'; break;
        case 'volcano': previewImgSrc = '../../../assets/decks/volcano/review/volcano.png'; break;
        case 'haze': previewImgSrc = [
          "../../../../assets/decks/fire/visibility/Visibility_High.jpg",
          "../../../../assets/decks/fire/visibility/Visibility_Medium.jpg",
          "../../../../assets/decks/fire/visibility/Visibility_Low.jpg",
        ][this.deckService.getVisibility()]; break;
        case 'wind': previewImgSrc = [
          "../../../../assets/decks/wind/windstructure/Graphic_Cracking.png",
          "../../../../assets/decks/wind/windstructure/Graphic_PartialCollapse.png",
          "../../../../assets/decks/wind/windstructure/Graphic_TotalCollapse.png",
        ][this.deckService.getStructureFailure()]; break;
        case 'structure': previewImgSrc = [
          "../../../../assets/decks/earthquake/structure/StructureFailure_1.png",
          "../../../../assets/decks/earthquake/structure/StructureFailure_2.png",
          "../../../../assets/decks/earthquake/structure/StructureFailure_3.png",
        ][this.deckService.getStructureFailure()]; break;
        case 'road': previewImgSrc = [
          "../../../../assets/decks/earthquake/condition/RoadCondition_1.png",
          "../../../../assets/decks/earthquake/condition/RoadCondition_2.png",
          "../../../../assets/decks/earthquake/condition/RoadCondition_3.png",
        ][this.deckService.getCondition()]; break;
        default: previewImgSrc = 'https://via.placeholder.com/150'; break;
      }
      this.previewImg.setAttribute('src', previewImgSrc)
      if (this.deckService.getDeckSubType() === 'volcano') {
        this.previewImgContainer.style.padding = '10px 0'
        this.previewImgContainer.style.justifyContent = 'center'
      }
    }
  }

  initHazeReview() {
    const visibilityImg = document.getElementById('visibility') as HTMLImageElement
    const airqualityImg = document.getElementById('airquality') as HTMLImageElement
    const airqualityText = document.getElementById('airquality-text') as HTMLParagraphElement

    let visibilityImgSrc = '../../../assets/decks/fire/review/visibility/Visibility_Indicator'
    let airqualityImgSrc = '../../../assets/decks/fire/review/airquality/Air_Quality_Indicator'
    let airqualityTextColor = 'white';

    switch (this.deckService.getVisibility()) {
      case 0: visibilityImgSrc += '_Low.png'; break;
      case 1: visibilityImgSrc += '_Medium.png'; break;
      case 2: visibilityImgSrc += '_High.png'; break;      
    }

    const airQuality = this.deckService.getAirQuality()
    switch (airQuality) {
      case 1: airqualityImgSrc += '_Moderate.png'; airqualityTextColor = 'lightgreen'; break;
      case 2: airqualityImgSrc += '_Poor.png'; airqualityTextColor = 'yellow'; break;      
      case 3: airqualityImgSrc += '_Severe.png'; airqualityTextColor = 'orange' ;break;      
      case 4: airqualityImgSrc += '_Hazardous.png'; airqualityTextColor = 'red'; break;      
    }

    visibilityImg.setAttribute('src', visibilityImgSrc)
    if (airQuality > 0) { 
      airqualityImg.setAttribute('src', airqualityImgSrc)
      airqualityText.style.color = airqualityTextColor
    }
  }

  setImagePreview(file: File) {
    const reader = new FileReader()
    reader.onload = (e: any) => {
      this.previewImg.setAttribute('src', e.target.result)
    }
    reader.readAsDataURL(file)
  }

  get description() {
    return this.deckService.getDescription()
  }

  get deckType() {
    return this.deckService.getDeckSubType()
  }

  // Fire

  get fireRange() {
    const radius = this.deckService.getFireDistance()
    const range = Math.PI * Math.pow(radius, 2) / 10000
    
    if (range < 1) return '<1'
    return range.toFixed(2)
  }

  // Haze

  get airQuality() {
    const quality = this.deckService.getAirQuality()

    switch(quality) {
      case 0: return ''
      case 1: return 'Moderate'
      case 2: return 'Poor'
      case 3: return 'Severe'
      case 4: return 'Hazardous'
    }
  }

  get visibility() {
    const visibleValue = this.deckService.getVisibility()

    switch (visibleValue) {
      case 0: return 'High'
      case 1: return 'Moderate'
      case 2: return 'Low'
    }
  }

  // Road
  get accessibility() {
    return this.deckService.getAccessibility()
  }

  get accessibilityHint() {
    const accessibility = this.deckService.getAccessibility()

    switch (accessibility) {
      case 0 : return "No Vehicle"
      case 1 : return "2-Wheel Vehicle"
      case 2 : return "4-Wheel Vehicle"
      case 3 : return "Large Vehicle"
      case 4 : return "Large Vehicle (Truck)"
    }
  }

  get accessibilityColor() {
    const accessibility = this.deckService.getAccessibility()

    switch (accessibility) {
      case 0 : return "#BE1E2D"
      case 1 : return "#F7941D"
      case 2 : return "#FFDE17"
      case 3 : return "#FFDE17"
      case 4 : return "#00A651"
    }
  }

  get condition() {
    const condition = this.deckService.getCondition()

    switch (condition) {
      case 0: return 'Light'
      case 1: return 'Moderate'
      case 2: return 'Heavy'
    }
  }

  // Structure
  get structuralFailure() {
    const failure = this.deckService.getStructureFailure()

    switch(failure) {
      case 0: return 'Cracking'
      case 1: return 'Partially Collapsed'
      case 2: return 'Fully Collapsed'
    }
  }

  get structuralFailureColor() {
    const failure = this.deckService.getStructureFailure()

    switch(failure) {
      case 0: return '#ffde17'
      case 1: return '#f7941d'
      case 2: return '#be1e2d'
    }
  }

  // Volcano
  get volcanicSigns() {
    return this.deckService.getVolcanicSigns().map(sign => {
      switch (sign) {
        case 1: return "Significant Temperature Increases";
        case 2: return "Drought / Vegetation";
        case 3: return "Frequent Earthquake Tremors";
        case 4: return "Frequent Rumbling Sounds";
        case 5: return "Unusual Animal Behaviour";
      }
    })
  }

  get evacuationNumber() {
    switch(this.deckService.getEvacuationNumber()) {
      case 1: return '< 5'
      case 2: return '5 - 50'
      case 3: return '> 50'
    }
    return undefined
  }

  get evacuationArea() {
    return this.deckService.getEvacuationArea()
      ? "Know where to evacuate"
      : "Don't know where to evacuate"
  }
}
