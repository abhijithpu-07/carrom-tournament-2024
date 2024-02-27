import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegComponent } from './reg/reg.component';
import { RulesComponent } from './rules/rules.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SemiComponent } from './semi/semi.component';
import { PredictionFormComponent } from './prediction-form/prediction-form.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/reg', pathMatch: 'full'},
  { path:'home',component: HomepageComponent},
  { path:'reg',component: RegComponent},
  { path:'sch',component: ScheduleComponent},
  { path:'semi',component: SemiComponent},
  { path:'rules',component: RulesComponent},
  { path:'predictionForms',component: PredictionFormComponent}
  // redirectTo: '/predictionForms', pathMatch: 'full' 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
