import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmtDetailsComponent } from './appmt-details.component';

describe('AppmtDetailsComponent', () => {
  let component: AppmtDetailsComponent;
  let fixture: ComponentFixture<AppmtDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppmtDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
