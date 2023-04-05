import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavigationService } from '../../../services/navigation.service';
import { DeckService } from '../../../services/cards/deck.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-notificationmedium',
  templateUrl: './notificationmedium.html',
  styleUrls: ['./notificationmedium.scss'],
})
export class NotificationMediumComponent {
  socialMediaItems: {
    id: number,
    name: string,
    placeholder : string
  }[]

  constructor(
    public translate: TranslateService,
    public navController: NavigationService,
    public route: ActivatedRoute,
    public deckService: DeckService
  ) {

    this.socialMediaItems = [
      {
        id : 1,
        name : 'twitter',
        placeholder : 'Twitter',
      },
      {
        id : 2,
        name : 'facebook',
        placeholder : 'Facebook',
        
      },
      {
        id : 3,
        name : 'instagram',
        placeholder : 'Instagram',

      },
      {
        id : 4,
        name : 'telegram',
        placeholder : 'Telegram',

      },
      {
        id : 5,
        name : 'whatsapp',
        placeholder : 'Whatsapp',

      },

    ]

  }
}
