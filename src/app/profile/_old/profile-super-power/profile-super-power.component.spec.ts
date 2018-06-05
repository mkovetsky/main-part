import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSuperPowerComponent } from './profile-super-power.component';

describe('ProfileSuperPowerComponent', () => {
  let component: ProfileSuperPowerComponent;
  let fixture: ComponentFixture<ProfileSuperPowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSuperPowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSuperPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
