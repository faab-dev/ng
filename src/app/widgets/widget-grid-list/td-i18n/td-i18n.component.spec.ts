import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdI18nComponent } from './td-i18n.component';

describe('TdI18nComponent', () => {
  let component: TdI18nComponent;
  let fixture: ComponentFixture<TdI18nComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdI18nComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdI18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
