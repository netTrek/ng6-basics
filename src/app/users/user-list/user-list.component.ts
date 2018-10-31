import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component ( {
  selector     : 'msg-user-list',
  templateUrl  : './user-list.component.html',
  styleUrls    : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {
  selectedUsr: User;

  constructor ( public $user: UserService ) {
  }

  ngOnInit (): void {
    this.$user.selectedUsr.subscribe( next => this.selectedUsr = next );
  }




  // @HostListener ( 'document:click', [ '$event' ] )
  // zweiterKlickHandler ( event: MouseEvent ) {
  //   console.log ( 'klick im doc', event );
  // }

}
