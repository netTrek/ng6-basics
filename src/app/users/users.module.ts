import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [UserListComponent],
  exports: [UserListComponent]
})
export class UsersModule { }
