import { TestBed } from '@angular/core/testing';

import { PreloadCardsService } from './preload-cards.service';

describe('PreloadCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreloadCardsService = TestBed.get(PreloadCardsService);
    expect(service).toBeTruthy();
  });
});
