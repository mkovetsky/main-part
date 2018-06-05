import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  message: any = { alert: null};

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
      this.alertService.getMessage().subscribe(message => { this.message = message; });
  }

  hideAlert() {
      this.message = null;
  }
}
