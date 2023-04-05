import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavigationService } from '../../../services/navigation.service';
import { DeckService } from '../../../services/cards/deck.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    public navController: NavigationService,
    public route: ActivatedRoute,
    public deckService: DeckService
  ) {
    this.deckService.setRoute(route);
  }

  ngOnInit() { }

}
