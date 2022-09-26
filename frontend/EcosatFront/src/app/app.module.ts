import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// Angular material
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { UpVarComponent } from './up-var/up-var.component';
import { BigChartComponent } from './big-chart/big-chart.component';
import { MiniChartsComponent } from './mini-charts/mini-charts.component';
import { FourChartComponent } from './four-chart/four-chart.component';
import { StatsChasrtComponent } from './stats-chasrt/stats-chasrt.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavComponent,
    UpVarComponent,
    BigChartComponent,
    MiniChartsComponent,
    FourChartComponent,
    StatsChasrtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
