import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AdminLoginComponent } from './components/admin/components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin/components/admin-dashboard/admin-dashboard.component';
import { AdminForgotComponent } from './components/admin/components/admin-forgot/admin-forgot.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { StudentModuleComponent } from './components/admin/components/admin-dashboard/components/student-module/student-module.component';
import { QuestionModuleComponent } from './components/admin/components/admin-dashboard/components/question-module/question-module.component';
import { RulesModuleComponent } from './components/admin/components/admin-dashboard/components/rules-module/rules-module.component';
import { ResultComponent } from './components/admin/components/admin-dashboard/components/result/result.component';
import { ExamDetailComponent } from './components/dashboard/components/exam-detail/exam-detail.component';
import { TestPageComponent } from './components/dashboard/components/test-page/test-page.component';
import { RulePageComponent } from './components/dashboard/components/rule-page/rule-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminForgotComponent,
    StudentModuleComponent,
    QuestionModuleComponent,
    RulesModuleComponent,
    ResultComponent,
    ExamDetailComponent,
    TestPageComponent,
    RulePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
