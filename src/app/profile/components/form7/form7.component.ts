import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form7',
  templateUrl: './form7.component.html',
  styleUrls: ['./form7.component.scss']
})
export class Form7Component implements OnInit {

  courses = [];

  constructor(public dialog : MatDialogRef<Form7Component>) { }

  ngOnInit() {
  }

  add()
  {
      this.courses.push({expanded : true, skill : '', description : '', qualities : []});
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
      this.courses[course_id].qualities.push(text);
  }

  app_delete(course_id, index)
  {
      this.courses[course_id].qualities.splice(index, 1);
  }

  onClose(save : boolean) {
      if(save)
        this.dialog.close(this.courses);
      else
        this.dialog.close(null);
  }
}
