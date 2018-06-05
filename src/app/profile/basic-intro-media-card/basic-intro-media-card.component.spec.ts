import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicIntroMediaCardComponent } from './basic-intro-media-card.component';

describe('BasicIntroMediaCardComponent', () => {
  let component: BasicIntroMediaCardComponent;
  let fixture: ComponentFixture<BasicIntroMediaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicIntroMediaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicIntroMediaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
