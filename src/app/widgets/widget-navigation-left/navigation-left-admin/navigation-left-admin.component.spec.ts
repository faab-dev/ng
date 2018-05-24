import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLeftAdminComponent } from './navigation-left-admin.component';

describe('NavigationLeftAdminComponent', () => {
  let component: NavigationLeftAdminComponent;
  let fixture: ComponentFixture<NavigationLeftAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationLeftAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationLeftAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
