import { Component, AfterViewChecked } from '@angular/core';
import { DeckService } from '../../services/cards/deck.service';

@Component({
  selector: 'app-submit-swipe',
  templateUrl: './submit-swipe.component.html',
  styleUrls: ['./submit-swipe.component.scss']
})
export class SubmitSwipeComponent implements AfterViewChecked {
  color: string
  isMobile: boolean

  constructor(
    public deckService: DeckService
  ) {
    switch(deckService.getDeckClass()) {
      case 'fire': this.color = 'white'; break;
      case 'earthquake': this.color = 'orange'; break;
      default: this.color = 'blue'
    }

    //Check for mobile or desktop device
    if (/Mobi/.test(navigator.userAgent)) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  ngAfterViewChecked() {
    // const submitKnob = document.querySelector('#submitKnob') as HTMLButtonElement
    // const submitSlider = document.querySelector('#submitSlider') as HTMLDivElement

    // let slideRange = submitSlider.offsetWidth - submitKnob.offsetWidth,
    //     slideThreshold = 0.9,
    //     slideTranslate = 0,
    //     slidePressed = false,
    //     swiped = false;

    // submitKnob.addEventListener('mousedown', (e) => {
    //   let slideStartPos = e.clientX
    //   slidePressed = true

    //   submitSlider.addEventListener('mousedown', (e) => {
    //     e.preventDefault()
    //     let slideDragPos = e.clientX
    //     slideTranslate = slideDragPos - slideStartPos

    //     if (slidePressed && slideTranslate >= 0 && slideTranslate < slideRange) {
    //       submitKnob.style.left = slideTranslate + 'px'
    //       submitSlider.style.backgroundColor = `rgba(31, 73, 99, ${(slideTranslate / (slideThreshold * slideRange))})` 

    //       if (slideTranslate >= (slideThreshold * slideRange) && !swiped) {
    //         swiped = true
    //         slidePressed = false

    //         // Submit report here
    //         console.log('submitted')
    //       }
    //     } 
    //   })
    // })

    // window.addEventListener('mouseup', () => {
    //   if (slidePressed && slideTranslate < (slideThreshold * slideRange) && !swiped) {
    //     slidePressed = false
    //     submitKnob.animate([
    //       { left: `${slideTranslate}px` },
    //       { left: '0px' }
    //     ], {
    //       duration: 50
    //     })
    //     submitSlider.style.backgroundColor = 'transparent'
    //   }
    // })
  }
}
