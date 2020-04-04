import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

import { NavigationService } from '../../../services/navigation.service';
import { DeckService } from '../../../services/cards/deck.service';

@Component({
  selector: 'app-volcano',
  templateUrl: './volcano.component.html',
  styleUrls: ['./volcano.component.scss']
})
export class VolcanoComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    public route: ActivatedRoute,
    public navController: NavigationService,
    public deckService: DeckService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('id');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('id');

    // Store card routes for navigation
    this.navController.registerCardRoutes('volcano');

    // Check for first card, else redirect
    this.navController.checkForFirstCard(this.route);

    this.deckService.setDeckType('volcano');
    this.deckService.setDeckSubType('volcano');

    this.deckService.setRoute(route)
  }

  ngOnInit() { }

}
