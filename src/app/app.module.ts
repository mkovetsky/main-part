import { AppRoutes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookMediaEditionModule} from './book-media-edition-component/book-media-edition.module';
import { CardDetailModule } from './card-detail/card-detail.module';
import { ProfilePictureModule } from './profile-picture/profile-picture.module';
import { IntroductionMenuModule } from './introduction-menu/introduction-menu.module';


import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';
import { SystemBarComponent } from './system-bar/system-bar.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { IntroductionEditionComponent} from './profile/_old/profile-introduction/introduction-edition/introduction-edition.component';
import { ActivityEditionComponent } from './profile/_old/profile-activity/activity-edition/activity-edition.component';
import {TripDetailsComponent} from './profile/pages';
import {ActivityDetailsComponent} from './profile/pages';
import {SkillsComponent} from './profile/pages';
import {WorkExperienceComponent} from './profile/pages';
import {SchoolDetailsHighlightsComponent} from './profile/pages';
import {TravellingInfoComponent} from './profile/pages';


// Services
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { AlertService } from './services/alert.service';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './mock/jwt.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { fakeBackendProvider } from './mock/fake-backend';

import { CommonModule } from '@angular/common';
import { DndModule } from 'ng2-dnd';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { InputsModule } from '@progress/kendo-angular-inputs';

// Materials
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatDividerModule
} from '@angular/material';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Misc
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BasicMediaCardComponent } from './profile/basic-media-card/basic-media-card.component';
import { BasicIntroMediaCardComponent } from './profile/basic-intro-media-card/basic-intro-media-card.component';
import { EventBrokerService } from './services/event-broker.service';
import { FragmentPolyfillModule } from './polyfill/fragment-polyfill.module';

import {NgxChartsModule} from '@swimlane/ngx-charts';
import { NotificationSideMenuComponent } from './notification-side-menu/notification-side-menu.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { SquareButtonComponent } from './common/square-button/square-button.component';
import { CircleButtonComponent } from './common/circle-button/circle-button.component';
import { ProfileEditionDialogHeaderComponent } from './common/profile-edition-dialog-header/profile-edition-dialog-header.component';
import { ProfileService } from './services/profile.service';
import { EmptyProfileCardComponent } from './profile/empty-profile-card/empty-profile-card.component';
import { ProfileModalService } from './services/profile-modal.service';
import { ProfileIntroductionComponent } from './profile/_old/profile-introduction/profile-introduction.component';
import { ProfileSuperPowerComponent } from './profile/_old/profile-super-power/profile-super-power.component';
import { ProfileTravelComponent } from './profile/_old/profile-travel/profile-travel.component';
import { ProfileAcademicComponent } from './profile/_old/profile-academic/profile-academic.component';
import { ProfileJobComponent } from './profile/_old/profile-job/profile-job.component';
import { ProfileSkillComponent } from './profile/_old/profile-skill/profile-skill.component';
import { ProfileActivityComponent } from './profile/_old/profile-activity/profile-activity.component';
import { ProfileSideMenuComponent } from './profile/_old/profile-side-menu/profile-side-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    SystemBarComponent,
    LoginComponent,
    LoginComponent,
    AlertComponent,
    DashboardComponent,
    RegisterComponent,
    ProfileComponent,
    PageNotFoundComponent,
    BasicMediaCardComponent,
    BasicIntroMediaCardComponent,
    NotificationSideMenuComponent,
    OnboardingComponent,
    NavigationMenuComponent,
    SquareButtonComponent,
    CircleButtonComponent,
    ProfileEditionDialogHeaderComponent,
    EmptyProfileCardComponent,
    ProfileIntroductionComponent,
    ProfileSuperPowerComponent,
    ProfileTravelComponent,
    ProfileAcademicComponent,
    ProfileJobComponent,
    ProfileSkillComponent,
    ProfileActivityComponent,
    ProfileSideMenuComponent,
    IntroductionEditionComponent,
    ActivityEditionComponent,
    TripDetailsComponent,
    ActivityDetailsComponent,
    SkillsComponent,
    WorkExperienceComponent,
    SchoolDetailsHighlightsComponent,
    TravellingInfoComponent,
  ],
  imports: [
    FragmentPolyfillModule.forRoot({
        smooth: true
    }),
    CommonModule,
    FlexLayoutModule,
    BookMediaEditionModule,
    CardDetailModule,
    ProfilePictureModule,
    IntroductionMenuModule,

    UiSwitchModule,
    InputsModule,
    DndModule.forRoot(),
    NgxChartsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatDividerModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      AppRoutes,
      {
          // Tell the router to use the HashLocationStrategy.
          useHash: false,
          enableTracing: false
      }),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    EventBrokerService,
    UserService,
    ProfileService,
    ProfileModalService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    },
    fakeBackendProvider
  ],
  entryComponents: [
    NavigationMenuComponent
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
