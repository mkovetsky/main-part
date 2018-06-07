import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    TripDetailsComponent,
    ActivityDetailsComponent,
    SkillsComponent,
    WorkExperienceComponent,
    SchoolDetailsHighlightsComponent,
    TravellingInfoComponent
} from './pages';

const routes: Routes = [
  {
    path: 'card-detail', children: [
      {path: 'card-detail', redirectTo: 'trip-detail', pathMatch: 'prefix'},
      {path: 'trip-detail', component: TripDetailsComponent},
      {path: 'activity-details', component: ActivityDetailsComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'school-details-highlights', component: SchoolDetailsHighlightsComponent},
      {path: 'work-experience', component: WorkExperienceComponent},
      {path: 'travelling-info', component: TravellingInfoComponent}
    ]
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CardDetailRoutingModule {
}
