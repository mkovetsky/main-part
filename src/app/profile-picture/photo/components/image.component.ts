import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { EditPhotoComponent } from '../modals/editphoto.component';
import { RepositionImageComponent } from '../modals/reposition/editphoto.component';
import { EditThumbComponent } from '../modals/editthumbnail/editphoto.component';

import { UserProfile } from '../models/profile.model';
import { ProfileService } from '../services/profile.service';

@Component({
    selector: 'app-image-pickage',
    templateUrl: './image.component.html',
    providers: [ ProfileService ]
})
export class ImagePickerComponent implements OnInit {

  @Input() imageForm: UserProfile;
  selectedOption: string;

  constructor(private dialog: MatDialog, private profile: ProfileService) {
  }

  ngOnInit() {
  }

  openDialog() {
        const dialogRef = this.dialog.open(EditPhotoComponent, {
        data: {
            user: this.imageForm
        }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('done');
        });
  }

  reposition() {
        const dialogRef = this.dialog.open(RepositionImageComponent, {
            data: {
                user: this.imageForm
            }
            });
            dialogRef.afterClosed().subscribe(result => {
                this.imageForm.cropped_picture = result.data.image;
                this.profile.setProfile(this.imageForm);
            });
   }
   editThumbnail() {
        const dialogRef = this.dialog.open(EditThumbComponent, {
            data: {
                user: this.imageForm
            }
            });
            dialogRef.afterClosed().subscribe(result => {
                    this.imageForm.cropped_picture = result.data.image;
                    this.profile.setProfile(this.imageForm);
            });
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
}
