import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHotelsComponent } from './header-hotels.component';

describe('HeaderHotelsComponent', () => {
  let component: HeaderHotelsComponent;
  let fixture: ComponentFixture<HeaderHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
