import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form9',
  templateUrl: './form9.component.html',
  styleUrls: ['./form9.component.scss']
})
export class Form9Component implements OnInit {

  data = {
    country : '',
    province : '',
    city : '',
    code : '',
    willingToTravel : '',
    t_reason : '',
    willingToRelocate : '',
    r_reason : ''
  };

  constructor(public dialog : MatDialogRef<Form9Component>) { }

  ngOnInit() {
  }

  onClose(save : boolean) {
      if(save)
        this.dialog.close(this.data);
      else
        this.dialog.close(null);
  }
}
