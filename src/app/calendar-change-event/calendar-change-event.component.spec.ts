import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarChangeEventComponent } from './calendar-change-event.component';

describe('CalendarChangeEventComponent', () => {
  let component: CalendarChangeEventComponent;
  let fixture: ComponentFixture<CalendarChangeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarChangeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarChangeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
