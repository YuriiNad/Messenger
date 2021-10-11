import { TestBed } from '@angular/core/testing';

import { ChuckNorrisRespService } from './chuck-norris-resp.service';

describe('ChuckNorrisRespService', () => {
  let service: ChuckNorrisRespService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckNorrisRespService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
