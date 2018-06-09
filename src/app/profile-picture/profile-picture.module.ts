import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatRippleModule,
  MatSliderModule
} from '@angular/material';
import { ProfilePictureComponent } from './profile-picture.component';
// custom components
import { ImagePickerComponent } from './photo/components/image.component';
import { EditPhotoComponent } from './photo/modals/editphoto.component';
import { RepositionImageComponent } from './photo/modals/reposition/editphoto.component';
import { EditThumbComponent } from './photo/modals/editthumbnail/editphoto.component';

import { CroppieComponent } from './photo/directives/croppie';

// custom directive
// import { CroppieModule } from 'angular-croppie-module';

@NgModule({
  declarations: [
    ProfilePictureComponent,
    ImagePickerComponent,
    EditPhotoComponent,
    RepositionImageComponent,
    EditThumbComponent,
    CroppieComponent
  ],
  entryComponents: [
    EditPhotoComponent,
    EditThumbComponent,
    RepositionImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatIconModule,
    MatSliderModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {path: 'edit-picture', component: ProfilePictureComponent},
    ]),
    // CroppieModule
  ],
  providers: [],
  bootstrap: [ProfilePictureComponent]
})
export class ProfilePictureModule {
}
