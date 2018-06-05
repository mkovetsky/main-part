import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTravelComponent } from './profile-travel.component';

describe('ProfileTravelComponent', () => {
  let component: ProfileTravelComponent;
  let fixture: ComponentFixture<ProfileTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
