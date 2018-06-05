import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {

  courses = [];

  constructor(public dialog : MatDialogRef<Form3Component>) { }

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

  trackByFn(index: any, item: any) {
    return index;
  }

  onClose(save : boolean) {
      if(save)
        this.dialog.close(this.data);
      else
        this.dialog.close(null);
  }

  add()
  {
      this.data.highlights.push(' ');
  }

  delete(index)
  {
      this.data.highlights.splice(index,1);
  }

}
