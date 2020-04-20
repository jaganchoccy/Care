import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from './sign-up.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './match-validator';
import { faUser, faKey, faLock, faEnvelope, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();
  registerForm: FormGroup;
  submitted = false;
  faUser = faUser;
  faKey = faKey;
  loader:boolean;
  faCalendarDay = faCalendarDay;
  faLock = faLock;
  faEnvelope = faEnvelope;

  constructor(private formBuilder: FormBuilder,
    private route: Router,
    private toastr: ToastrService,
    private SignUpSer: SignUpService) {
    this.dpConfig.containerClass = 'theme-unitrix'; //or whatever color
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loader = true;
    this.SignUpSer.setSignUpApi(this.registerForm.value).subscribe(res => {
      this.loader = false;
      if (res.error) {
        console.log(res, 'err');
        this.toastr.warning(res.message, 'Warning: Try Again !')
      } else {
        this.toastr.warning(res.message + ', SignIn', 'Message !');
        this.route.navigateByUrl('/signIn');

        // login successful so redirect to return url
      }
    });
  }

}
