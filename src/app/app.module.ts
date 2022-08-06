import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from 'primeng/calendar';
import {FormsModule} from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { MessageService, ConfirmationService } from 'primeng/api';
import {ChartModule} from 'primeng/chart';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardLinechartComponent } from './components/dashboard-linechart/dashboard-linechart.component';
import { BoxesComponent } from './components/boxes/boxes.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { ActivityComponent } from './components/activity/activity.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MachinesComponent } from './components/machines/machines.component';
import { PlanningComponent } from './components/planning/planning.component';
import { ReportsComponent } from './components/reports/reports.component';
import { FactoryComponent } from './components/factory/factory.component';
import { PlanningBoxesComponent } from './components/planning-boxes/planning-boxes.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PlanningTreeComponent } from './components/planning-tree/planning-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    DashboardLinechartComponent,
    BoxesComponent,
    TimeLineComponent,
    ActivityComponent,
    MachinesComponent,
    PlanningComponent,
    ReportsComponent,
    FactoryComponent,
    PlanningBoxesComponent,
    PlanningTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    ChartModule,
    BrowserAnimationsModule,
    NgChartsModule,
    NgCircleProgressModule,
    NgCircleProgressModule.forRoot({
      
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,

    })
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
