import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindlocationComponent } from './windlocation.component';

describe('WindlocationComponent', () => {
  let component: WindlocationComponent;
  let fixture: ComponentFixture<WindlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindlocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
