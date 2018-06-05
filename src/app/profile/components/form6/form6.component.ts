import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form6',
  templateUrl: './form6.component.html',
  styleUrls: ['./form6.component.scss']
})
export class Form6Component implements OnInit {

  constructor(public dialog : MatDialogRef<Form6Component>) { }

  data = {
    school : '',
    country : '',
    province : '',
    city : '',
    study : '',
    degree : '',
    from : {
        month : '',
        year : ''
    },
    to : {
        month : '',
        year : ''
    }
  }

  ngOnInit() {
  }

  onClose(save : boolean) {
    if(save)
      this.dialog.close(this.data);
    else
      this.dialog.close(null);
  }
}
