import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninModule} from "@app/signin/signin.module";
import { authGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('@app/signin/signin.module').then(m => m.SigninModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate:[authGuard] },
  { path: '**', loadChildren: () => import('@app/signin/signin.module').then(m => m.SigninModule),canActivate:[authGuard]  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule { }