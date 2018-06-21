import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';

@Component ( {
  selector   : 'pta-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]/*,
  encapsulation: ViewEncapsulation.None*/
} )
export class UserComponent implements OnInit, AfterViewInit {
  name = 'saban ünlü';

  @ViewChild( 'btn' ) // selector === referenzname im Template
  btn: ElementRef<HTMLButtonElement>;

  @ViewChild ( UserAvatarComponent )
  userAvatar: UserAvatarComponent;

  @ViewChildren ( UserAvatarComponent )
  userAvatars: QueryList<UserAvatarComponent>;

  onClick () {
    this.name = 'angular rocks';
  }

  ngAfterViewInit (): void {
    console.log ( this.userAvatar,
      this.userAvatars.toArray() );
    console.log ( this.btn );
  }

  ngOnInit (): void {
  }


}
