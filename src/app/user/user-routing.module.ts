import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: '', component: UserComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'new', component: NewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
