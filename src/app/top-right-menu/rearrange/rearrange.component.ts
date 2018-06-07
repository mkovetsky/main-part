import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';


@Component({
  selector: 'app-rearrange',
  templateUrl: './rearrange.component.html',
  styleUrls: ['./rearrange.component.sass']
})
export class RearrangeComponent implements OnInit {
  profileSections = [];

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profileSections = this.profileService.profileSections;
  }


}
