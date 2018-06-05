import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditionDialogHeaderComponent } from './profile-edition-dialog-header.component';

describe('ProfileEditionDialogHeaderComponent', () => {
  let component: ProfileEditionDialogHeaderComponent;
  let fixture: ComponentFixture<ProfileEditionDialogHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditionDialogHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditionDialogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
