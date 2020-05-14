import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvacuationareaComponent } from './evacuationarea.component';

describe('EvacuationareaComponent', () => {
  let component: EvacuationareaComponent;
  let fixture: ComponentFixture<EvacuationareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvacuationareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvacuationareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
