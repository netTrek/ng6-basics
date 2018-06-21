import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserAvatarComponent } from './user/user-avatar/user-avatar.component';
import { UserNameComponent } from './user/user-name/user-name.component';

@NgModule ( {
  imports     : [ CommonModule ],
  declarations: [ UserComponent, UserAvatarComponent, UserNameComponent ],
  exports     : [ UserComponent, UserNameComponent ]
} )
export class UserModule {
}
