import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.scss']
})
export class Form4Component implements OnInit {

  constructor(public dialog : MatDialogRef<Form4Component>) { }

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

  onClose(save : boolean) {
      if(save)
        this.dialog.close(this.data);
      else
        this.dialog.close(null);
  }
}
