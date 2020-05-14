import { TestBed } from '@angular/core/testing';

import { ReportCardService } from './report-card.service';

describe('ReportCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportCardService = TestBed.get(ReportCardService);
    expect(service).toBeTruthy();
  });
});
