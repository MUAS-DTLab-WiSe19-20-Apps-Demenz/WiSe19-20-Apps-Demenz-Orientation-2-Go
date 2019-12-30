import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewContactComponent } from './create-new-contact.component';

describe('CreateNewContactComponent', () => {
  let component: CreateNewContactComponent;
  let fixture: ComponentFixture<CreateNewContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
