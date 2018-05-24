import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListSearchComponent } from './grid-list-search.component';

describe('GridListSearchComponent', () => {
  let component: GridListSearchComponent;
  let fixture: ComponentFixture<GridListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
