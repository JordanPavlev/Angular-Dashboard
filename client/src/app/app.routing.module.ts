import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninModule} from "@app/signin/signin.module";

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: "SigninModule" },
  // { path: '', loadChildren: () => import('@app/signin/signin.module').then(m => m.SigninModule) },
  // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule { }