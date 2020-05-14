import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireestimateComponent } from './fireestimate.component';

describe('FireestimateComponent', () => {
  let component: FireestimateComponent;
  let fixture: ComponentFixture<FireestimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireestimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireestimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
