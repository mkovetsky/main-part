import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityEditionComponent } from './activity-edition.component';

describe('ActivityEditionComponent', () => {
  let component: ActivityEditionComponent;
  let fixture: ComponentFixture<ActivityEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
