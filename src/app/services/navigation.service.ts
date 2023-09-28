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
  deckType: string;

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
  }

  getCardIndex(card) {
    return this.cardRoutes.indexOf(card);
  }

  getCardPath() {
    return this.cardRoutes[this.cardCounter];
  }

  filterRoutes(subtype: string) {
    const mustHaveCard = ["photo", "description", "review", "thank"]
    this.deckType = subtype;
    switch (subtype) {
      case 'road':
        this.cardRoutes = ['type', 'location', 'accessibility', 'condition', ...mustHaveCard];
        break;
      case 'structure':
        this.cardRoutes = ['type', 'location', 'structure', ...mustHaveCard];
        break;
      case 'flood':
        this.cardRoutes = ['location', 'depth', ...mustHaveCard];
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

  reset(route) {
    this.router.navigate([this.cardRoutes[0]], {relativeTo: route});
    this.cardCounter = 0;
  }

  resetEqDeckToLocation(route) {
    this.deckType === 'flood' ? this.router.navigate([this.cardRoutes[0]], {relativeTo: route}) : this.router.navigate([this.cardRoutes[1]], {relativeTo: route});
    this.cardCounter = 0;
  }

  next(route) {
      const nextCardRoute = this.cardRoutes[this.cardCounter + 1];
      this.router.navigate([nextCardRoute], {relativeTo: route});
      this.cardCounter += 1;
    }

  nextFromChild(route, relativePathPrefix) {
    console.log(route);
    if (this.cardCounter < (this.cardRoutes.length - 1)) {
      const nextCardRoute = this.cardRoutes[this.cardCounter + 1];
      this.router.navigate([relativePathPrefix+nextCardRoute], {relativeTo: route});
      this.cardCounter += 1;
    }
  }

  getCurrentRouteName() {
    return this.cardRoutes[this.cardCounter];
  }
}
