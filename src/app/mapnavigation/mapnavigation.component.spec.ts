import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapnavigationComponent } from './mapnavigation.component';

describe('MapnavigationComponent', () => {
  let component: MapnavigationComponent;
  let fixture: ComponentFixture<MapnavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapnavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
