import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { UserNameComponent } from './user-name/user-name.component';

@Component ( {
  selector   : 'pta-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]/*,
  encapsulation: ViewEncapsulation.None*/
} )
export class UserComponent implements OnInit, AfterViewInit, AfterContentInit {
  name = 'saban ünlü';

  /**
   * traskludierte Inhalte ermitteln
   */

  @ContentChild ( UserNameComponent )
  userName: UserNameComponent;

  /**
   * Elemente aus Vorlage ermitteln
   */
  @ViewChild ( 'btn' ) // selector === referenzname im Template
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
      this.userAvatars.toArray () );
    console.log ( this.btn );
  }

  ngOnInit (): void {
  }

  ngAfterContentInit (): void {
    console.log ( this.userName );
  }

}
