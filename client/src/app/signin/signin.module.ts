import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInRoutingModule } from './signin-routing.module';

import { SignInComponent } from './signin.component';

import { AuthService } from './auth.service';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from "@angular/material/card";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignInRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatButtonToggleModule
  ],
  providers: [AuthService]
})
export class SigninModule { }
