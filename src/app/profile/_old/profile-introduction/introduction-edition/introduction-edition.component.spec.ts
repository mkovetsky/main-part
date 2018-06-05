import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionEditionComponent } from './introduction-edition.component';

describe('IntroductionEditionComponent', () => {
  let component: IntroductionEditionComponent;
  let fixture: ComponentFixture<IntroductionEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
