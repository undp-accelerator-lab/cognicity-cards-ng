import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationMediumComponent } from './notificationmedium.component';

describe('SignUpComponent', () => {
  let component: NotificationMediumComponent;
  let fixture: ComponentFixture<NotificationMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
