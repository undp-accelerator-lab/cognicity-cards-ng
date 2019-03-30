import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindstructureComponent } from './windstructure.component';

describe('WindstructureComponent', () => {
  let component: WindstructureComponent;
  let fixture: ComponentFixture<WindstructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindstructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
