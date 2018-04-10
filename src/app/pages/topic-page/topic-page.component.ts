import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AlertService } from '../../services/alert.service';

import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.scss']
})
export class TopicPageComponent implements OnInit {

  constructor(private adminService: AdminService,
    private spinnerService: Ng4LoadingSpinnerService, private alertService: AlertService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.spinnerService.show();
    console.log(form.value.token);
    this.adminService.newTopics(form.value.token, ).subscribe(
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
