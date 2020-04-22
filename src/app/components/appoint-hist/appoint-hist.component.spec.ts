import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointHistComponent } from './appoint-hist.component';

describe('AppointHistComponent', () => {
  let component: AppointHistComponent;
  let fixture: ComponentFixture<AppointHistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointHistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
