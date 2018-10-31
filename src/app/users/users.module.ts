import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UtilsModule } from '../utils/utils.module';
import { MSG_CONF } from '../app.token';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, UtilsModule, RouterModule
  ],
  providers: [
    {provide: MSG_CONF, useValue: 'config val2', multi: true }
  ],
  declarations: [UserListComponent, UserComponent, UserDetailComponent],
  exports: [UserListComponent, UserComponent, UserDetailComponent]
})
export class UsersModule { }
