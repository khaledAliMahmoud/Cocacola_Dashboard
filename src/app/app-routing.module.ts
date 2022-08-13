import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MachinesComponent } from './components/machines/machines.component';
import { PlanningComponent } from './components/planning/planning.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ProtectionGuard } from './protection.guard';

const routes: Routes = [
  { path: 'home', canActivate:[ProtectionGuard], component: HomeComponent },
  { path: 'dashboard', canActivate:[ProtectionGuard],  component: DashboardComponent },
  { path: 'machines', canActivate:[ProtectionGuard],  component: MachinesComponent },
  { path: 'reports', canActivate:[ProtectionGuard],  component: ReportsComponent },
  { path: 'planning', canActivate:[ProtectionGuard],  component: PlanningComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
