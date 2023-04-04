import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from '@app/signin/signin.component';
import { authService } from '@app/_services/authService';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from "@angular/material/card";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { SignInRoutingModule } from './signin.routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatButtonToggleModule,
    SignInRoutingModule,
    RouterModule
  ],
  providers: [authService]
})
export class SigninModule { }
