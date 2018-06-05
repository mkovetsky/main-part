import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Form5Component, Form10Component } from '../../components';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  workExperiences = [
    {
      details : null,
      highlights : null
    }
  ];

  ngOnInit() {
  }

  editWorkExperienceDetails(index){
    let dialogRef = this.dialog.open(Form5Component);
    if(this.workExperiences[index].details)
      dialogRef.componentInstance.data = this.workExperiences[index].details;
    dialogRef.afterClosed().subscribe((res) => {
      if(res)
        this.workExperiences[index].details = res;
    });
  }

  editWorkExperienceHighlights(index){
    let dialogRef = this.dialog.open(Form10Component);
    if(this.workExperiences[index].highlights)
      dialogRef.componentInstance.courses = this.workExperiences[index].highlights;
    dialogRef.afterClosed().subscribe((res) => {
      if(res)
        this.workExperiences[index].highlights = res;
    });
  }

  addExp(){
    this.workExperiences.push(
      {
        details : null,
        highlights : null
      }
    );
  }
}
