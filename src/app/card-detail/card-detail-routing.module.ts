import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ActivityDetailsComponent,
  SchoolDetailsHighlightsComponent,
  SkillsComponent,
  TravellingInfoComponent,
  TripDetailsComponent,
  WorkExperienceComponent
} from './pages';
import { CardDetailComponent } from './card-detail.component';

const routes: Routes = [
  {
    path: 'card-details', component: CardDetailComponent, children: [
      {path: 'trip-details', component: TripDetailsComponent},
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
