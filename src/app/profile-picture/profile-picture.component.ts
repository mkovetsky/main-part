import { Component } from '@angular/core';
import { UserProfile } from './photo/models/profile.model';
import { ProfileService } from './photo/services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css'],
  providers: [ ProfileService ]
})
export class ProfilePictureComponent {
  title = 'app';
  imageForm: UserProfile;

  constructor(private profile: ProfileService) {
        this.imageForm = profile.getProfile();
        if (this.imageForm.original_picture === '') {
          // init both cropped and original photo with default thumbnail
          this.imageForm.original_picture = profile.getDefaultThumbnail();
          this.imageForm.cropped_picture = profile.getDefaultThumbnail();
        }
  }
}
