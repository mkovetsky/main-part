import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  courses = [];

  constructor(public dialog : MatDialogRef<Form2Component>) { }

  ngOnInit() {
  }

  add()
  {
      this.courses.push({skill : '', level : 0});
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
