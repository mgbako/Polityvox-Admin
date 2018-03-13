import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AlertService } from '../../services/alert.service';

import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-award-point-page',
  templateUrl: './award-point-page.component.html',
  styleUrls: ['./award-point-page.component.scss']
})
export class AwardPointPageComponent implements OnInit {

  constructor(private customerService: CustomerService,
    private spinnerService: Ng4LoadingSpinnerService, private alertService: AlertService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.spinnerService.show();
    const phone = form.value.phone;
    const data = {
      phone: phone,
      point: form.value.point
    };
    console.log(form.value);

    this.customerService.awardPoint(data).subscribe(
      res => {
        this.reset(form);
        this.spinnerService.hide();
        if (res) {
          this.alertService.success(`Point Awarded to ${phone}`);
          console.log(res);
          return;
        }

        this.alertService.error(res);
        console.log(res);
      },
      error => {
        this.spinnerService.hide();
        this.alertService.error(error.message.details);
        console.log(error);
      }
    );
  }

  reset(form) {
    form.reset();
  }
}
