import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Activity } from '../activity';

@Component({
  selector: 'activity-edition',
  templateUrl: './activity-edition.component.html',
  styleUrls: ['./activity-edition.component.scss']
})
export class ActivityEditionComponent implements OnInit {

  activity: Activity;

  constructor(private dialogRef: MatDialogRef<ActivityEditionComponent>) {
  }

  ngOnInit() {
    this.activity = JSON.parse(localStorage.getItem('profile-activity'));
    if (!this.activity) {
      this.activity = new Activity();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onCheckedClicked() {
    localStorage.setItem('profile-activity', JSON.stringify(this.activity));
    this.closeDialog();
  }
}
