import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  courses = [];

  constructor(public dialog : MatDialogRef<Form1Component>) { }

  ngOnInit() {
  }

  add()
  {
      this.courses.push({expanded : true, title : '', description : '', text : '', applications : []});
  }

  delete(index)
  {
      this.courses.splice(index,1);
  }

  expand(index)
  {
      this.courses[index].expanded = !this.courses[index].expanded;
  }

  arrow_style(stat)
  {
      if(stat)
        return 'expand';
      else
        return '';
  }

  app_add(text, event, course_id)
  {
      if(event.key !== 'Enter' || !text)
        return;
      this.courses[course_id].applications.push(text);
  }

  app_delete(course_id, index)
  {
      this.courses[course_id].applications.splice(index, 1);
  }

  onClose(save : boolean) {
      if(save)
        this.dialog.close(this.courses);
      else
        this.dialog.close(null);
  }
}
