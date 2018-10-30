import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [UserListComponent, UserComponent],
  exports: [UserListComponent, UserComponent]
})
export class UsersModule { }
