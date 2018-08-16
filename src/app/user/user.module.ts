import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';
import { UtilsModule } from '../utils/utils.module';

// ng generate module user --spec false --module app
// ng g m user --spec false
@NgModule({
  imports: [
    CommonModule, UtilsModule
  ],
  declarations: [UserListComponent, UserItemComponent],
  exports: [UserListComponent]
})
export class UserModule { }
