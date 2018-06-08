import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RearrangeComponent } from './rearrange.component';

describe('RearrangeComponent', () => {
  let component: RearrangeComponent;
  let fixture: ComponentFixture<RearrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RearrangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RearrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
