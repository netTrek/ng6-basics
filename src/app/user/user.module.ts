import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';
import { UtilsModule } from '../utils/utils.module';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';

// ng generate module user --spec false --module app
// ng g m user --spec false
@NgModule({
  imports: [
    CommonModule, UtilsModule, HttpClientModule, RouterModule
  ],
  declarations: [UserListComponent, UserItemComponent, UserDetailsComponent],
  exports: [UserListComponent, UserDetailsComponent]
})
export class UserModule { }
