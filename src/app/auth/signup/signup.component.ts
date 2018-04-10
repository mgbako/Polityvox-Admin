import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AlertService } from '../../services/alert.service';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: any;
  signupForm: FormGroup;

  constructor( private router: Router, private authService: AuthService,
    private spinnerService: Ng4LoadingSpinnerService, private alertService: AlertService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    this.spinnerService.show();
    const data = {
      'email': form.value.email,
      'address': form.value.address,
      'password': form.value.password,
      'confirmPassword': form.value.confirmPassword,
      'firstname': form.value.firstname,
      'lastname': form.value.lastname,
      'username': form.value.username,
      'phone': form.value.phone
    };

    if (data.password === data.confirmPassword) {
      this.authService.register(data).subscribe(
        res => {
          this.alertService.success('Account Created Successfully');
          this.spinnerService.hide();

          if (res) {
            this.router.navigate(['/signin']);
          }
        },
        error => {
          this.alertService.error(error.message.message);
          this.spinnerService.hide();
          console.log(error.message);
        }
      );
    }
  }

}
