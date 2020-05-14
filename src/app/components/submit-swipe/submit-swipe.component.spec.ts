import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitSwipeComponent } from './submit-swipe.component';

describe('SubmitSwipeComponent', () => {
  let component: SubmitSwipeComponent;
  let fixture: ComponentFixture<SubmitSwipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitSwipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
