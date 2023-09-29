import { TestBed } from '@angular/core/testing';

import { ModuleCardMenuGuard } from './module-card-menu.guard';

describe('ModuleCardMenuGuard', () => {
  let guard: ModuleCardMenuGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ModuleCardMenuGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
