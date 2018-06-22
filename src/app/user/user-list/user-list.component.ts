import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component ( {
  selector   : 'pta-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  @Input ()
  userList: User[];
  selectedUsr: User;

  isSucc = true;

  @HostBinding ( 'style.font-size.px' )
  fontsize = 20;

  constructor () {
  }

  ngOnInit () {
    console.log ( this.userList );
  }

  setAsSelected ( $event: User ) {
    this.selectedUsr = $event;
  }

  addNewUser () {
    this.userList.push ( {
      firstname: 'saban' + Math.floor ( Math.random () * 100 ),
      lastname : 'ünlü' + Math.floor ( Math.random () * 100 )
    } );
  }

  deleteUsr ( $event: User ) {
    const ind = this.userList.indexOf( $event );
    if ( ind !== -1 ) {
      this.userList.splice( ind,  1 );
    }
  }
}
