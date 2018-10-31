import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UtilsModule } from '../utils/utils.module';
import { MSG_CONF } from '../app.token';

@NgModule({
  imports: [
    CommonModule, UtilsModule
  ],
  providers: [
    {provide: MSG_CONF, useValue: 'config val2', multi: true }
  ],
  declarations: [UserListComponent, UserComponent],
  exports: [UserListComponent, UserComponent]
})
export class UsersModule { }
