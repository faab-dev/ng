import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListActionsComponent } from './grid-list-actions.component';

describe('GridListActionsComponent', () => {
  let component: GridListActionsComponent;
  let fixture: ComponentFixture<GridListActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridListActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
