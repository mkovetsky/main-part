import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMediaCardComponent } from './basic-media-card.component';

describe('BasicMediaCardComponent', () => {
  let component: BasicMediaCardComponent;
  let fixture: ComponentFixture<BasicMediaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicMediaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMediaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
