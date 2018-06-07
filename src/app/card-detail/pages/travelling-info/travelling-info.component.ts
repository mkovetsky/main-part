import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Form9Component } from '../../components';

@Component({
  selector: 'app-travelling-info',
  templateUrl: './travelling-info.component.html',
  styleUrls: ['./travelling-info.component.scss']
})
export class TravellingInfoComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  data : any = null;

  ngOnInit() {
  }

  edit(){
    let dialogRef = this.dialog.open(Form9Component);
    if(this.data)
      dialogRef.componentInstance.data = this.data;
    dialogRef.afterClosed().subscribe((res) => {
      if(res)
        this.data = res;
    });
  }
}
