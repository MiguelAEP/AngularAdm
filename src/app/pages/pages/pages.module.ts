import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { Grafica1Component } from '../grafica1/grafica1.component';
import { ProgressComponent } from '../progress/progress.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    
  ]
})
export class PagesModule { }
