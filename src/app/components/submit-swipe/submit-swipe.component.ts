import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

import { DeckService } from '../../services/cards/deck.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-submit-swipe',
  templateUrl: './submit-swipe.component.html',
  styleUrls: ['./submit-swipe.component.scss']
})
export class SubmitSwipeComponent implements OnInit {
  isLocationInIndonesia = true;
  isLoading = false;
  isSumbitted = false;

  @Input() isUserAbleToContinue: boolean

  constructor(
    public deckService: DeckService,
    public navController: NavigationService,
    public route: ActivatedRoute,
  ) { }

  get isDescriptionAndPhotoEmpty(): boolean {
    return !(this.deckService.getDescription() || this.deckService.getPreview());
  }

  async ngOnInit() {
    let initialMouse = 0;
    let slideMovementTotal = 0;
    let mouseIsDown = false;
    const knob = $('#submitKnob');
    const slider = $('#submitSlider')

    // If both of description and image is empty, next button is disabled
    if (this.isDescriptionAndPhotoEmpty) {
      knob.css('background-color', '#A0A0A0')
      return
    }

    this.isLocationInIndonesia = await this.deckService.isLocationInIndonesia();

    // or location is not indonesia
    if (!this.isLocationInIndonesia) {
      knob.css('background-color', '#A0A0A0')
      return
    }

    knob.on('mousedown touchstart', function (event) {
      mouseIsDown = true;
      slideMovementTotal = slider.width() - $(this).width() - 13;
      initialMouse = event.clientX || (event.originalEvent as any).touches[0].pageX;
    });

    knob.on('mouseup touchend', function (event) {
      if (!mouseIsDown) return;

      mouseIsDown = false;
      const currentMouse = event.clientX || event.changedTouches[0].pageX;
      const relativeMouse = currentMouse - initialMouse;

      if (relativeMouse < slideMovementTotal) {
        slider.addClass('transparent')
        knob.animate({ left: "0" }, 300, () => {
          slider.css('background-color', 'rgba(31,73,99,0)')
          slider.removeClass('transparent')
        });
      }
    });

    $(document.body).on('mousemove touchmove', (event) => {
      if (!mouseIsDown)
        return;

      const currentMouse = event.clientX || (event.originalEvent as any).touches[0].pageX;
      const relativeMouse = currentMouse - initialMouse;

      slider.css(
        'background-color',
        `rgba(31,73,99, ${relativeMouse / slideMovementTotal})`
      )

      if (relativeMouse <= 0) {
        knob.css({ 'left': '0' });
        return;
      }
      if (relativeMouse >= slideMovementTotal && ! this.isSumbitted) {
        knob.css({ 'left': slideMovementTotal + 'px' });
        this.submit()
        return;
      }
      knob.css({ 'left': relativeMouse });
    });
  }

  async submit() {
    this.isLoading = true
    if (!this.isSumbitted) {
      this.isSumbitted = true;
      await this.deckService.submit().then(() => {
        this.isLoading = false
        this.navController.next(this.deckService.getRoute())
      })
    }

    // setTimeout(() => {
    // }, 250)
  }
}
