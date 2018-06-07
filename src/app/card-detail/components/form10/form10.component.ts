import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form10',
  templateUrl: './form10.component.html',
  styleUrls: ['./form10.component.scss']
})
export class Form10Component implements OnInit {

  courses = [];

  constructor(public dialog : MatDialogRef<Form10Component>) { }

  ngOnInit() {
  }

  add()
  {
      this.courses.push({ description : '' });
  }

  delete(index)
  {
      this.courses.splice(index,1);
  }

  onClose(save : boolean) {
      if(save)
        this.dialog.close(this.courses);
      else
        this.dialog.close(null);
  }
}
