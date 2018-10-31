import { Component, HostListener, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { MSG, MSG_CONF } from '../../app.token';

@Component ( {
  selector     : 'msg-user-list',
  templateUrl  : './user-list.component.html',
  styleUrls    : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {
  selectedUsr: User;

  constructor ( public $user: UserService, @Inject( MSG ) msg: string, @Inject( MSG_CONF ) msgConf: string[] ) {
    console.log( msg, msgConf );
  }

  ngOnInit (): void {
    this.$user.selectedUsr.subscribe( next => this.selectedUsr = next );
  }




  // @HostListener ( 'document:click', [ '$event' ] )
  // zweiterKlickHandler ( event: MouseEvent ) {
  //   console.log ( 'klick im doc', event );
  // }

}
