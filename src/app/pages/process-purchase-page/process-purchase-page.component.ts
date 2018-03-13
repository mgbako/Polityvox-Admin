import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AlertService } from '../../services/alert.service';

import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-process-purchase-page',
  templateUrl: './process-purchase-page.component.html',
  styleUrls: ['./process-purchase-page.component.scss']
})
export class ProcessPurchasePageComponent implements OnInit {

  constructor(private customerService: CustomerService,
    private spinnerService: Ng4LoadingSpinnerService, private alertService: AlertService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.spinnerService.show();
    console.log(form.value.token);
    this.customerService.verifyToke(form.value.token).subscribe(
      res => {
        this.alertService.success('Token Verified');
        this.spinnerService.hide();
        console.log(res);
      },
      error => {
        this.alertService.error(error);
        this.spinnerService.hide();
        console.log(error);
      }
    );

  }

}
