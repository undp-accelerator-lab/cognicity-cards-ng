import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthBgComponent } from './depth-bg.component';

describe('DepthBgComponent', () => {
  let component: DepthBgComponent;
  let fixture: ComponentFixture<DepthBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepthBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepthBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
