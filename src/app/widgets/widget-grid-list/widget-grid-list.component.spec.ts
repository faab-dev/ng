import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGridListComponent } from './widget-grid-list.component';

describe('WidgetGridListComponent', () => {
  let component: WidgetGridListComponent;
  let fixture: ComponentFixture<WidgetGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
