import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvacuationnumberComponent } from './evacuationnumber.component';

describe('EvacuationnumberComponent', () => {
  let component: EvacuationnumberComponent;
  let fixture: ComponentFixture<EvacuationnumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvacuationnumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvacuationnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
