import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { UserProfile } from '../models/profile.model';
import { ProfileService } from '../services/profile.service';

@Component({
  templateUrl: './editphoto.component.html',
  providers: [ ProfileService ]
})
export class EditPhotoComponent implements OnInit {

    imageForm: UserProfile;

    constructor(public dialogRef: MatDialogRef<EditPhotoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public profile: ProfileService
        ) {
            this.imageForm = data.user;
    }

    ngOnInit(): void {
    }

    removeThumbnail() {
        // reset profile thumbnail with default one
        this.imageForm.original_picture = this.profile.getDefaultThumbnail();
        this.imageForm.cropped_picture = this.profile.getDefaultThumbnail();
        this.profile.setProfile(this.imageForm);
    }

    changeListener($event): void {
        this.readThis($event.target);
    }

    readThis(inputValue: any): void {
        const file: File = inputValue.files[0];
        const myReader: FileReader = new FileReader();

        const _this = this;
        myReader.onloadend = function(e) {
        // you can perform an action with readed data here
        _this.imageForm.original_picture = myReader.result;
        _this.imageForm.cropped_picture = myReader.result;
        _this.profile.setProfile(_this.imageForm);
        };
        myReader.readAsDataURL(file);
    }

    submit() {
        this.profile.setProfile(this.imageForm);
        this.dialogRef.close(this.imageForm);
    }
}
