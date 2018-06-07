import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
// import * as Croppie from 'croppie';
// import { CroppieDirective } from 'angular-croppie-module';
declare var jquery: any;
declare var $: any;

import { UserProfile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  templateUrl: './editphoto.component.html'
})
export class EditThumbComponent implements OnInit {

    imageForm: UserProfile;

    constructor(public dialogRef: MatDialogRef<EditThumbComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
            this.imageForm = data.user;
    }

    ngOnInit() {
    }

    croppedImage(data: any) {
        this.dialogRef.close({ data });
    }

}
