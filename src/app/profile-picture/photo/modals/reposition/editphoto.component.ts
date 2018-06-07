import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { UserProfile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  templateUrl: './editphoto.component.html'
})
export class RepositionImageComponent implements OnInit {

  showZoomer = false;
  imageForm: UserProfile;

  constructor(public dialogRef: MatDialogRef<RepositionImageComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
            this.imageForm = data.user;
    }

    ngOnInit() {
    }

    croppedImage(data: any) {
        this.dialogRef.close({ data });
    }
}
