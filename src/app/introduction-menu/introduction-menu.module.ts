import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatSelectModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { DraggableModule } from './draggable/draggable.module';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { RearrangeComponent } from './rearrange/rearrange.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileService } from './services/profile.service';
import { ClickOutsideDirective } from '../directives/click-outside.directive';


const appRoutes: Routes = [
  {path: 'rearrange', component: RearrangeComponent}
];

@NgModule({
  declarations: [
    EditMenuComponent,
    RearrangeComponent,
    MenuComponent,
    ClickOutsideDirective
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSelectModule,
    DraggableModule,
    MatCheckboxModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}
    )
  ],
  exports: [MenuComponent],
  providers: [ProfileService],
})
export class IntroductionMenuModule {
}
