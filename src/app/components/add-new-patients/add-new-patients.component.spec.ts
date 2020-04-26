import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPatientsComponent } from './add-new-patients.component';

describe('AddNewPatientsComponent', () => {
  let component: AddNewPatientsComponent;
  let fixture: ComponentFixture<AddNewPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
