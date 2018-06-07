import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Form6Component, Form11Component, Form1Component } from '../../components';

@Component({
  selector: 'app-school-details-highlights',
  templateUrl: './school-details-highlights.component.html',
  styleUrls: ['./school-details-highlights.component.scss']
})
export class SchoolDetailsHighlightsComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  schoolInfo = [
    {
      details : null,
      highlights : null,
      courses : null
    }
  ];

  ngOnInit() {
  }

  editSchoolDetails(index){
    let dialogRef = this.dialog.open(Form6Component);
    if(this.schoolInfo[index].details)
      dialogRef.componentInstance.data = this.schoolInfo[index].details;
    dialogRef.afterClosed().subscribe((res) => {
      if(res)
        this.schoolInfo[index].details = res;
    });
  }

  editAcademicHighlights(index){
    let dialogRef = this.dialog.open(Form11Component);
    if(this.schoolInfo[index].highlights)
      dialogRef.componentInstance.data = this.schoolInfo[index].highlights;
    dialogRef.afterClosed().subscribe((res) => {
      if(res)
        this.schoolInfo[index].highlights = res;
    });
  }

  edit(index){
    let dialogRef = this.dialog.open(Form1Component);
    if(this.schoolInfo[index].courses)
      dialogRef.componentInstance.courses = this.schoolInfo[index].courses;
    dialogRef.afterClosed().subscribe((res) => {
      if(res)
        this.schoolInfo[index].courses = res;
    });
  }

  addSchool(){
    this.schoolInfo.push(
      {
        details : null,
        highlights : null,
        courses : null
      }
    );
  }
}
