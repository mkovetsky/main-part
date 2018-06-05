import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDetailsHighlightsComponent } from './school-details-highlights.component';

describe('SchoolDetailsHighlightsComponent', () => {
  let component: SchoolDetailsHighlightsComponent;
  let fixture: ComponentFixture<SchoolDetailsHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolDetailsHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolDetailsHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
