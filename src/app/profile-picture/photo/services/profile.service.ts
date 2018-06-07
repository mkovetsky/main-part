import { Injectable } from '@angular/core';
import * as OPTIONS from '../models/profile.model';

@Injectable()
export class ProfileService {

  // configurations
  profile: OPTIONS.UserProfile = this.InitializeProfileData();

  constructor() {
  }

  InitializeProfileData(): OPTIONS.UserProfile {
      return {
            userid: 0,
            firstName: 'Patrica',
            lastName: 'test lname',
            middleName: 'test middlename',
            dob: '3/3/1981',
            cropped_picture: '',
            original_picture: ''
      };
  }

  setProfile(profile: OPTIONS.UserProfile) {
      this.profile = profile;
  }

  getProfile() {
      return this.profile;
  }

  getDefaultThumbnail() {
     return '/mediasoftangular101/assets/images/default.jpg'; // 'mediasoftangular101
  }
}
