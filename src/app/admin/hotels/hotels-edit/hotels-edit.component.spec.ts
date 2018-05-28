import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsEditComponent } from './hotels-edit.component';

describe('HotelsEditComponent', () => {
  let component: HotelsEditComponent;
  let fixture: ComponentFixture<HotelsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
