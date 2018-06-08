import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileSuperPowerComponent } from './profile/_old/profile-super-power/profile-super-power.component';
import { ProfileTravelComponent } from './profile/_old/profile-travel/profile-travel.component';
import { ProfileAcademicComponent } from './profile/_old/profile-academic/profile-academic.component';
import { ProfileJobComponent } from './profile/_old/profile-job/profile-job.component';
import { ProfileSkillComponent } from './profile/_old/profile-skill/profile-skill.component';
import { ProfileActivityComponent } from './profile/_old/profile-activity/profile-activity.component';
import { ProfileSideMenuComponent } from './profile/_old/profile-side-menu/profile-side-menu.component';
import { ProfileIntroductionComponent } from './profile/_old/profile-introduction/profile-introduction.component';
import { NotificationSideMenuComponent } from './notification-side-menu/notification-side-menu.component';
import { RearrangeComponent } from './introduction-menu/rearrange/rearrange.component';

export const AppRoutes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent,
        children: [
            { path: 'introduction', component: ProfileIntroductionComponent },
            { path: 'power', component: ProfileSuperPowerComponent },
            { path: 'travel', component: ProfileTravelComponent },
            { path: 'academics', component: ProfileAcademicComponent },
            { path: 'jobs', component: ProfileJobComponent },
            { path: 'skills', component: ProfileSkillComponent },
            { path: 'activities', component: ProfileActivityComponent }
        ], canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'profile-side-menu', component: ProfileSideMenuComponent, outlet: 'sidenav-right', canActivate: [AuthGuard]  },
    { path: 'notification-side-menu', component: NotificationSideMenuComponent, outlet: 'sidenav-left', canActivate: [AuthGuard]  },
    { path: 'register', component: RegisterComponent },
    { path: 'rearrange', component: RearrangeComponent},
    { path: '**', component: PageNotFoundComponent }
];
