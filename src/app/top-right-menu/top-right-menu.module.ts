import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatSelectModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { DraggableModule } from './draggable/draggable.module';
import { TopRightMenuComponent } from './top-right-menu.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { RearrangeComponent } from './rearrange/rearrange.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileService } from './services/profile.service';


@NgModule({
  declarations: [
    TopRightMenuComponent,
    EditMenuComponent,
    RearrangeComponent,
    HomeComponent,
    MenuComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSelectModule,
    DraggableModule,
    MatCheckboxModule,

  ],
  providers: [ProfileService],
  bootstrap: [TopRightMenuComponent]
})
export class TopRightMenuModule {
}

platformBrowserDynamic().bootstrapModule(TopRightMenuModule);
