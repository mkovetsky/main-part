import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { MatCardModule, MatDialogModule, MatInputModule, MatMenuModule,
  MatButtonModule, MatButtonToggleModule, MatRippleModule, MatIconModule,
  MatSliderModule } from '@angular/material';
import { ProfilePictureComponent } from './profile-picture.component';

// custom directive
// import { CroppieModule } from 'angular-croppie-module';


// custom components
import { ImagePickerComponent } from './photo/components/image.component';
import { EditPhotoComponent } from './photo/modals/editphoto.component';
import { RepositionImageComponent } from './photo/modals/reposition/editphoto.component';
import { EditThumbComponent } from './photo/modals/editthumbnail/editphoto.component';

import { CroppieComponent} from './photo/directives/croppie';
import {ArticlesComponent} from '../book-media-edition-component/blog/articles/articles.component';
import {ArticleComponent} from '../book-media-edition-component/blog/article/article.component';
import {EditArticleComponent} from '../book-media-edition-component/blog/edit-article/edit-article.component';

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
      {
        path: 'profile', children: [
          {path: '', redirectTo: 'picture', pathMatch: 'prefix'},
          {path: 'picture', component: ProfilePictureComponent},
          ]
        },
      ]),
      // CroppieModule
  ],
  providers: [],
  bootstrap: [ProfilePictureComponent]
})
export class ProfilePictureModule { }
