import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DataService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent {
  title = 'app';

  current : any;

  pages = [
    {
      name : 'Trips',
      link : 'trip-details'
    },
    {
      name : 'Activities',
      link : 'activity-details'
    },
    {
      name : 'Skills',
      link : 'skills'
    },
    {
      name : 'Work Experiences',
      link : 'work-experience'
    },
    {
      name : 'Academic',
      link : 'school-details-highlights'
    },
    {
      name : 'Travelling',
      link : 'travelling-info'
    }
  ];

  constructor(private dialog : MatDialog, private dataService : DataService){
    this.current = this.pages[0];
  }
}
