import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiredistanceComponent } from './firedistance.component';

describe('FiredistanceComponent', () => {
  let component: FiredistanceComponent;
  let fixture: ComponentFixture<FiredistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiredistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiredistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
