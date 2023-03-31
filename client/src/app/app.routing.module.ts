import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./signin/signin.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "SigninModule" },
  { path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },
  // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule { }
