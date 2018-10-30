import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../user';

@Component ( {
  selector     : 'msg-user-list',
  templateUrl  : './user-list.component.html',
  styleUrls    : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  users: User[] = [
    { lastname: 'Ünlü', firstname: 'Saban', age: 44},
    { lastname: 'Müller', firstname: 'Peter', age: 33},
    { lastname: 'Musterfrau', firstname: 'Heike', age: 33}
  ];
  selectedUsr: User;

  constructor () {
  }

  ngOnInit (): void {
  }

  deleteUser ( user: User ) {
    if ( user === this.selectedUsr ) {
      this.selectedUsr = undefined;
    }
    this.users.splice( this.users.indexOf(user), 1 );
  }

  cloneUser ( user: User ) {
    this.users.push( {... user} );
  }

  selectUser ( user: User ) {
    if ( user === this.selectedUsr ) {
      this.selectedUsr = undefined;
    } else {
      this.selectedUsr = user;
    }
  }

  @HostListener ( 'document:click', [ '$event' ] )
  zweiterKlickHandler ( event: MouseEvent ) {
    console.log ( 'klick im doc', event );
  }

}
