import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellingInfoComponent } from './travelling-info.component';

describe('TravellingInfoComponent', () => {
  let component: TravellingInfoComponent;
  let fixture: ComponentFixture<TravellingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
