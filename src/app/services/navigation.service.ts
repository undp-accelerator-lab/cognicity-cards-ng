import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DeckService } from './cards/deck.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  deck: string;
  cardRoutes: string[] = [];
  cardCounter: number;

  constructor(
    private router: Router,
    public deckService: DeckService
  ) { }

  get tabs() {
    return [this.cardRoutes.length, this.cardCounter]
  }

  registerCardRoutes(deck) {
    this.deck = deck;

    let cardRoutesConfig;
    const deckRoutes = this.router.config[2]['_loadedConfig'].routes[0].children;

    for (const deckRoute of deckRoutes) {
      if (deckRoute.path === this.deck) {
        cardRoutesConfig = deckRoute['_loadedConfig'].routes[0].children;
      }
    }

    for (const route of cardRoutesConfig) {
      this.cardRoutes.push(route.path);
    }

    console.log({ cardRoutesConfig })
    console.log({ deckRoutes })
    console.log('this.cardRoutes', this.cardRoutes)
  }

  getCardIndex(card) {
    return this.cardRoutes.indexOf(card);
  }

  getCardPath() {
    return this.cardRoutes[this.cardCounter];
  }

  filterRoutes(subtype: string) {
    switch (subtype) {
      case 'road':
        this.cardRoutes = ['type', 'location', 'accessibility', 'condition', "photo", "description", "review", "thank"];
        break;
      case 'structure':
        this.cardRoutes = ['type', 'location', 'structure', "photo", "description", "review", "thank"];
        break;
    }
  }

  checkForFirstCard(route) {
    if (route.children.length && route.children[0].hasOwnProperty('url')) {
      const currentRoute = route.children[0].url['value'][0].path;

      this.cardCounter = this.getCardIndex(currentRoute);

      if (this.cardCounter !== 0) {
        this.router.navigate([this.cardRoutes[0]], {relativeTo: route});
        this.cardCounter = 0;
      }
    } else {
      this.router.navigate([this.deck + '/' + this.cardRoutes[0]], {relativeTo: route});
      this.cardCounter = 0;
    }
  }

  back(route) {
    if (this.cardCounter > 0) {
      const prevCardRoute = this.cardRoutes[this.cardCounter - 1];
      this.router.navigate([prevCardRoute], {relativeTo: route});
      this.cardCounter -= 1;
    }
  }

  async next(route) {
    if (this.getCardPath() === 'review') {
      const isLocationInIndonesia = await this.deckService.isLocationInIndonesia()

      if (!this.deckService.isDescriptioORPhotoFilled || !isLocationInIndonesia) {
        return
      }
    }

    if (this.cardCounter < (this.cardRoutes.length - 1)) {
      const nextCardRoute = this.cardRoutes[this.cardCounter + 1];
      this.router.navigate([nextCardRoute], {relativeTo: route});
      this.cardCounter += 1;
    }
  }
}
