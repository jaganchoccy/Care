import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewPatientService } from './add-new-patients.service';
@Component({
  selector: 'app-add-new-patients',
  templateUrl: './add-new-patients.component.html',
  styleUrls: ['./add-new-patients.component.scss']
})
export class AddNewPatientsComponent implements OnInit {

  patientForm: FormGroup;
  submitted = false;
  loader: boolean;

  constructor(private formBuilder: FormBuilder,private _newPatientS:NewPatientService) { }

  ngOnInit() {
    debugger
    this.submitPatientForm()
  }


  submitPatientForm(){
    this.patientForm = this.formBuilder.group({
      id: '66',
      patientid: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      contactno: ['', Validators.required],
      emergencycontactno: ['', Validators.required],
      gender: ['', Validators.required]
  });
  }

  // convenience getter for easy access to form fields
  get f() { return this.patientForm.controls; }

  onSubmit() {
    debugger
    this.submitted = true;

    // stop here if form is invalid
    if (this.patientForm.invalid) {
        return;
    }else{
      
      this.createNewPatient(this.patientForm.value);
    }
    
}

onReset() {
    this.submitted = false;
    this.patientForm.reset();
}


// create a new patient
createNewPatient(value){
  this.loader = true;
  this._newPatientS.addNewPatientApi(value).subscribe(res => {
    debugger
    this.loader = false;
  });
}

}
