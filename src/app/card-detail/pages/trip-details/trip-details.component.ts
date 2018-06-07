import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { Form4Component } from '../../components';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  doEdit : boolean = false;
  data = {
      destination : '',
      from : {
          month : '',
          year : ''
      },
      to : {
          month : '',
          year : ''
      },
      description : ''
  };

  ngOnInit() {
  }

  edit(){
    let dialogRef = this.dialog.open(Form4Component);
    if(this.data)
      dialogRef.componentInstance.data = this.data;
    dialogRef.afterClosed().subscribe((res) => {
      if(res)
        this.data = res;
    });
  }
}
