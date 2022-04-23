import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { AuthGuard } from "src/app/services/auth.guard";
import { AdminLoginComponent } from "./components/admin/components/admin-login/admin-login.component";
import { AdminDashboardComponent } from "./components/admin/components/admin-dashboard/admin-dashboard.component";
import { AdminForgotComponent } from "./components/admin/components/admin-forgot/admin-forgot.component";
import { AdminAuthGuard } from "src/app/components/admin/services/admin-auth.guard";
import { StudentModuleComponent } from './components/admin/components/admin-dashboard/components/student-module/student-module.component';
import { QuestionModuleComponent } from './components/admin/components/admin-dashboard/components/question-module/question-module.component';
import { RulesModuleComponent } from './components/admin/components/admin-dashboard/components/rules-module/rules-module.component';
import { ResultComponent } from './components/admin/components/admin-dashboard/components/result/result.component';
import { ExamDetailComponent } from './components/dashboard/components/exam-detail/exam-detail.component';
import { TestPageComponent } from './components/dashboard/components/test-page/test-page.component';
import { RulePageComponent } from './components/dashboard/components/rule-page/rule-page.component';

const routes: Routes = [

  {
      path : '',
      component : HomeComponent,
      pathMatch : 'full'
  },
  {
      path : "login",
      component : LoginComponent,
      pathMatch : 'full'
  },
  {
      path : "dashboard",
      component : DashboardComponent,
      pathMatch : 'full',
      canActivate : [AuthGuard]
  },
  {
      path : "forgot",
      component : ForgotPasswordComponent,
      pathMatch : 'full'
  },
  {
      path : "admin-login",
      component : AdminLoginComponent,
      pathMatch : 'full'
  },
  {
      path : "admin-dashboard",
      component : AdminDashboardComponent,
      pathMatch : 'full',
      canActivate : [AdminAuthGuard]
  },
  {
      path : "admin-forgot",
      component : AdminForgotComponent,
      pathMatch : 'full'
  },
  {
      path : "student-module",
      component : StudentModuleComponent,
      pathMatch : 'full',
      canActivate : [AdminAuthGuard]
  },
  {
      path : "question-module",
      component : QuestionModuleComponent,
      pathMatch : 'full',
      canActivate : [AdminAuthGuard]
  },
  {
      path : "rules-module",
      component : RulesModuleComponent,
      pathMatch : 'full',
      canActivate : [AdminAuthGuard]
  },
  {
      path : "result",
      component : ResultComponent,
      pathMatch : 'full',
      canActivate : [AdminAuthGuard]
  },
  {
      path : "exam-detail",
      component : ExamDetailComponent,
      pathMatch : 'full',
      canActivate : [AuthGuard]
  },
  {
      path : "rule-page",
      component : RulePageComponent,
      pathMatch : 'full',
      canActivate : [AuthGuard]
  },
  {
      path : "test",
      component : TestPageComponent,
      pathMatch : 'full',
    //   canActivate : [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
