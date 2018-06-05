import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form11',
  templateUrl: './form11.component.html',
  styleUrls: ['./form11.component.scss']
})
export class Form11Component implements OnInit {

  data = {
      gpa : '',
      displayGpa : false,
      descriptions : []
  };

  constructor(public dialog : MatDialogRef<Form11Component>) { }

  ngOnInit() {
  }

  add()
  {
      this.data.descriptions.push({ description : ''});
  }

  delete(index)
  {
      this.data.descriptions.splice(index,1);
  }

  onClose(save : boolean) {
      if(save)
        this.dialog.close(this.data);
      else
        this.dialog.close(null);
  }
}
