import { TestBed } from '@angular/core/testing';

import { SettingsDatastoreService } from './settings-datastore.service';

describe('SettingsDatastoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SettingsDatastoreService = TestBed.get(SettingsDatastoreService);
    expect(service).toBeTruthy();
  });
});
