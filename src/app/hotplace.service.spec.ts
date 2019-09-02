import { TestBed } from '@angular/core/testing';

import { HotplaceService } from './hotplace.service';

describe('HotplaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotplaceService = TestBed.get(HotplaceService);
    expect(service).toBeTruthy();
  });
});
