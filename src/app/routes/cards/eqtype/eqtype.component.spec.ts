import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqtypeComponent } from './eqtype.component';

describe('EqtypeComponent', () => {
  let component: EqtypeComponent;
  let fixture: ComponentFixture<EqtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
