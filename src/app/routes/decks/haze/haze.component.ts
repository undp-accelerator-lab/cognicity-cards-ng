import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

import { NavigationService } from '../../../services/navigation.service';
import { DeckService } from '../../../services/cards/deck.service';

@Component({
  selector: 'app-haze',
  templateUrl: './haze.component.html',
  styleUrls: ['./haze.component.scss']
})
export class HazeComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    public route: ActivatedRoute,
    public navController: NavigationService,
    public deckService: DeckService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

    // Store card routes for navigation
    this.navController.registerCardRoutes('haze');

    // Check for first card, else redirect
    this.navController.checkForFirstCard(this.route);

    this.deckService.setDeckType('haze')
    this.deckService.setDeckSubType('haze')

    this.deckService.setRoute(route)
  }

  ngOnInit() { }

}
