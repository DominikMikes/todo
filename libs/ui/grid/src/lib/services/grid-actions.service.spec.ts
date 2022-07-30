import { TestBed } from '@angular/core/testing';

import { GridActionsService } from './grid-actions.service';

describe('GridActionsService', () => {
  let service: GridActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
