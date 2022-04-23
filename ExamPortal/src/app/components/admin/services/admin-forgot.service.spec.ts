import { TestBed } from '@angular/core/testing';

import { AdminForgotService } from './admin-forgot.service';

describe('AdminForgotService', () => {
  let service: AdminForgotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminForgotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
