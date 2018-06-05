import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyProfileCardComponent } from './empty-profile-card.component';

describe('EmptyProfileCardComponent', () => {
  let component: EmptyProfileCardComponent;
  let fixture: ComponentFixture<EmptyProfileCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyProfileCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
