import { TestBed, async, inject } from '@angular/core/testing';

import { AvailableLangGuard } from './available-lang.guard';

describe('AvailableLangGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvailableLangGuard]
    });
  });

  it('should ...', inject([AvailableLangGuard], (guard: AvailableLangGuard) => {
    expect(guard).toBeTruthy();
  }));
});
