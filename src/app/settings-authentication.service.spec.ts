import { TestBed } from '@angular/core/testing';

import { SettingsAuthenticationService } from './settings-authentication.service';

describe('SettingsAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SettingsAuthenticationService = TestBed.get(SettingsAuthenticationService);
    expect(service).toBeTruthy();
  });
});
