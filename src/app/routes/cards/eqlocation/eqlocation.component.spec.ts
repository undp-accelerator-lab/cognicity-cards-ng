import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqlocationComponent } from './eqlocation.component';

describe('EqlocationComponent', () => {
  let component: EqlocationComponent;
  let fixture: ComponentFixture<EqlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqlocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
