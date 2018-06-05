import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileJobComponent } from './profile-job.component';

describe('ProfileJobComponent', () => {
  let component: ProfileJobComponent;
  let fixture: ComponentFixture<ProfileJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
