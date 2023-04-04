import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { SignInComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app.routing.module";
import { SigninModule } from './signin/signin.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    RouterOutlet,
    RouterModule,
    SigninModule,
    DashboardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
