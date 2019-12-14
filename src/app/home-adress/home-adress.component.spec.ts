import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdressComponent } from './home-adress.component';

describe('HomeAdressComponent', () => {
  let component: HomeAdressComponent;
  let fixture: ComponentFixture<HomeAdressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
