import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared';

import { CardDetailComponent } from './card-detail.component';
import { CardDetailRoutingModule } from './card-detail-routing.module';
import { DataService } from './services';

import { APP_COMPONENTS } from './components';
import { APP_PAGES } from './pages';
import {
  Form10Component, Form11Component,
  Form2Component,
  Form3Component,
  Form4Component,
  Form5Component,
  Form6Component,
  Form7Component, Form8Component, Form9Component
} from '../profile/components';


@NgModule({
  declarations: [
    CardDetailComponent,
    APP_COMPONENTS,
    APP_PAGES
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule,
    CardDetailRoutingModule,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    Form6Component,
    Form7Component,
    Form8Component,
    Form9Component,
    Form10Component,
    Form11Component,
  ],
  providers: [ DataService ],
  entryComponents : APP_COMPONENTS,
  bootstrap: [CardDetailComponent]
})
export class CardDetailModule { }
