import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LeadsComponent } from './leads/leads.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    LeadsComponent,
    EnrollmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
