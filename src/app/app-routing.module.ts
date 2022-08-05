import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MachinesComponent } from './components/machines/machines.component';
import { PlanningComponent } from './components/planning/planning.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'machines', component: MachinesComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
