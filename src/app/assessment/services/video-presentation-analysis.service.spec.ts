import { TestBed } from '@angular/core/testing';

import { VideoPresentationAnalysisService } from './video-presentation-analysis.service';

describe('VideoPresentationAnalysisService', () => {
  let service: VideoPresentationAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoPresentationAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
