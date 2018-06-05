import { Injectable } from '@angular/core';

export interface Profile {
  text: string;
  videoUrl: string;
}

@Injectable()
export class ProfileService {

  constructor() { }

  getProfileIntroduction(): Profile {
    return JSON.parse(localStorage.getItem('profile-introduction'));
  }

  saveProfileIntroduction(profile: Profile) {
    localStorage.setItem('profile-introduction', JSON.stringify(profile));
  }
}
