import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthSliderComponent } from './depth-slider.component';

describe('DepthSliderComponent', () => {
  let component: DepthSliderComponent;
  let fixture: ComponentFixture<DepthSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepthSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepthSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
