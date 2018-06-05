import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form8',
  templateUrl: './form8.component.html',
  styleUrls: ['./form8.component.scss']
})
export class Form8Component implements OnInit {

  courses = [];

  associated = ["option1", "option2", "option3"];

  constructor() { }

  ngOnInit() {
  }

  add()
  {
      this.courses.push({expanded : true, title : '', description : ''});
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

}
