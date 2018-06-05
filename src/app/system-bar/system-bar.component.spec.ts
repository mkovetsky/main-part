import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemBarComponent } from './system-bar.component';

describe('SystemBarComponent', () => {
  let component: SystemBarComponent;
  let fixture: ComponentFixture<SystemBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
