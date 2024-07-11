import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { CreateuserComponent } from './pages/createuser/createuser.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'user-list', component: UserlistComponent },
      { path: 'createUser', component: CreateuserComponent },
    ],
  },
];
