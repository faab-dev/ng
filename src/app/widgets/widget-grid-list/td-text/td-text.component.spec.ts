import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdTextComponent } from './td-text.component';

describe('TdTextComponent', () => {
  let component: TdTextComponent;
  let fixture: ComponentFixture<TdTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
