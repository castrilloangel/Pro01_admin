import { TestBed } from '@angular/core/testing';

import { DashboardModulesService } from './dashboard-modules.service';

describe('DashboardModulesService', () => {
  let service: DashboardModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
