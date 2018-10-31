import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { HomeComponent } from './home/home/home.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UsersGuard } from './users/users.guard';
import { ContactComponent } from './contact/contact/contact.component';
import { MapComponent } from './contact/contact/map/map.component';
import { FormComponent } from './contact/contact/form/form.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'users', component: UserListComponent },
  { path: 'users/:id',
    component: UserDetailComponent,
    canActivate: [UsersGuard],
    data: {
      dataKey: 'hello world;'
    },
    resolve: {
      user: UsersGuard
    }
  },
  {path: 'contact', component: ContactComponent,
    children: [
      {path: '', redirectTo: 'map', pathMatch: 'full' },
      {path: 'map', component: MapComponent },
      {path: 'form', component: FormComponent }
    ]
  },
  {path: 'home', component: HomeComponent },
  {path: 'dash',
    loadChildren: './dash/dash.module#DashModule'
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
