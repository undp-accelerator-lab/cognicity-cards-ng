import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiretypeComponent } from './firetype.component';

describe('FiretypeComponent', () => {
  let component: FiretypeComponent;
  let fixture: ComponentFixture<FiretypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiretypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiretypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
