import { Component, OnInit, HostBinding } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor( private router: Router, private authService: AuthService,
    private spinnerService: Ng4LoadingSpinnerService, private alertService: AlertService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    this.spinnerService.show();
    console.log(form);
    const data = {
      email: form.value.email,
      password: form.value.password
    }

    this.authService.login(data).subscribe(
      res => {
        this.spinnerService.hide();
        this.alertService.success('Merchant Saved Successfully');
        console.log(res);
        this.authService.setUser(res);
        this.router.navigate(['/home']);
      },
      error => {
        this.alertService.error(error.message.details);
        console.log(error.message);
        this.spinnerService.hide();
      }
    );
  }
}
