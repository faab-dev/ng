import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListPagerComponent } from './grid-list-pager.component';

describe('GridListPagerComponent', () => {
  let component: GridListPagerComponent;
  let fixture: ComponentFixture<GridListPagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridListPagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
