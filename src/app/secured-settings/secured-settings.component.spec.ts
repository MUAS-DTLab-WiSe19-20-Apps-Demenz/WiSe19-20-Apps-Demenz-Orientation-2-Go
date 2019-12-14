import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredSettingsComponent } from './secured-settings.component';

describe('SecuredSettingsComponent', () => {
  let component: SecuredSettingsComponent;
  let fixture: ComponentFixture<SecuredSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuredSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuredSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
