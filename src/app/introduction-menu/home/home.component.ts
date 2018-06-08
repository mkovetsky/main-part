import { Component, OnInit } from '@angular/core';
import { ProfileCategory, ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  menuShown = false;
  editShown = false;
  profileSections = [];
  editMenu: ProfileCategory[] = [{
    categoryTitle: 'Rearrange Profile Sections',
    icon: 'school',
    link: '/rearrange',
    records: []
  }, {
    categoryTitle: 'Add media',
    icon: 'media',
    records: []
  }];

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profileSections = this.profileService.profileSections;
  }
}
