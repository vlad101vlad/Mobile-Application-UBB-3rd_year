import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {MasterViewComponent} from './master-view/master-view.component';
import {AuthGuard} from './service/guard/auth.guard';
import {AutoLoginGuard} from './service/guard/auto-login.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login',
    component: LoginComponent,
    canActivate: [AutoLoginGuard]
  },
  { path: 'home',
    component: MasterViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
