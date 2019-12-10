import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckIntervalComponent } from './check-interval.component';

describe('CheckIntervalComponent', () => {
  let component: CheckIntervalComponent;
  let fixture: ComponentFixture<CheckIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
