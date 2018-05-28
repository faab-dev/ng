import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsCopyComponent } from './hotels-copy.component';

describe('HotelsCopyComponent', () => {
  let component: HotelsCopyComponent;
  let fixture: ComponentFixture<HotelsCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
