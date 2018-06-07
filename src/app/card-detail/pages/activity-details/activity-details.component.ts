import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { Form3Component } from '../../components';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  data = {
      activity : '',
      ongoing : false,
      fromYear : '',
      toYear : '',
      description : '',
      highlights : []
  };

  ngOnInit() {
  }

  edit(){
      let dialogRef = this.dialog.open(Form3Component);
      if(this.data)
        dialogRef.componentInstance.data = this.data;
      dialogRef.afterClosed().subscribe((res) => {
        if(res)
          this.data = res;
      });
  }
}
