import { Component, OnInit, TemplateRef, Inject } from '@angular/core';
import { SignInService } from './sign-in.service';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  faFacebookSquare = faFacebookSquare;
  faLinkedinIn = faLinkedin;
  loader: boolean;
  faGoogle = faGoogle;
  returnUrl: string;
  loginForm: FormGroup;
  faUser = faUser;
  faKey = faKey;
  forgetPswd: any;
  modalRef: BsModalRef;
  forgetPswdMsg: boolean;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private SignInSer: SignInService,
    private router: Router,
    @Inject(BsModalService) private modalService: BsModalService,
    private toastr: ToastrService
  ) {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });

  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  //submit login form
  onSubmit() {
    if (this.loginForm.valid) {
      this.loader = true;
      this.SignInSer.setSignInApi(this.loginForm.value).subscribe(res => {
        this.loader = false;
        if (res.error) {
          console.log(res, 'err');
          this.toastr.warning(res.message, 'Warning: Try Again !')
        } else {

          console.log(res, 'succ');
          this.router.navigateByUrl('/main');
        }
      });
    }
  }

  //modal 
  openModalForgetPswd(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'unitrixModal' });
  }
  
  //forget pswd
  forgetPassword() {
    if (!this.forgetPswd) {
      this.forgetPswdMsg = true;
      return ''
    }
    this.forgetPswdMsg = false;
    let data = {
      email: this.forgetPswd
    }
    this.modalRef.hide();
    this.loader = true;
    this.SignInSer.forgetpswd(data).subscribe(res => {
      this.loader = false;
      if (res.error) {
        console.log(res, 'err');
        this.toastr.warning(res.message, 'Warning: Try Again !')
      } else {
        this.toastr.warning(res.message, 'Alert !');
      }
    });
  }


}
