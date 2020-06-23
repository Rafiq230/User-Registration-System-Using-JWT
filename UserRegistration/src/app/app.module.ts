import { AuthInterceptor } from './auth/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './Shared/Services/user.service';
import { UserRegistrationComponent } from './User/user-registration/user-registration.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';

@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      UserRegistrationComponent,
      UserLoginComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
      UserService,
      // {
      //   provide: HTTP_INTERCEPTORS,
      //  // useClass: AuthInterceptor,
      //   useFactory: (router: Router) => {
      //     return new AuthInterceptor(router);
      //   },
      //   multi: true,
      //   deps: [Router]
      // }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
