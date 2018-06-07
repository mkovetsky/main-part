import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.scss']
})
export class Form5Component implements OnInit {

  constructor(public dialog : MatDialogRef<Form5Component>) { }

  data = {
      compony : '',
      job : '',
      position : '',
      isWorking : false,
      from : {
          month : '',
          year : ''
      },
      to : {
          month : '',
          year : ''
      },
      country : '',
      province : '',
      city : ''
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
