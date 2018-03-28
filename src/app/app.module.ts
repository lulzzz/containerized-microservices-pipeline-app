import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config.service';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ResetComponent } from './reset/reset.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ChangeemailComponent } from './changeemail/changeemail.component';
import { CreateUserComponent } from './create-user/create-user.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'reset',
    component: ResetComponent
  },
  {
    path: 'notfound',
    component: NotfoundComponent
  },
  {
    path: 'forgot',
    component: ForgotComponent
  },
  {
    path: 'change',
    component: ChangeemailComponent
  },
  {
    path: 'create',
    component: CreateUserComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    // component: LoginFormComponent,
  },
  {
    path: '**',
    redirectTo: 'login'
    // component: NotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    ResetComponent,
    DashboardComponent,
    NotfoundComponent,
    ForgotComponent,
    ChangeemailComponent,
    CreateUserComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ UserService, ConfigService ], // , AuthguardGuard
  bootstrap: [ AppComponent ]
})
export class AppModule { }
