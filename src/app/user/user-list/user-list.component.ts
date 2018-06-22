import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

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

  constructor ( private $user: UserService ) {
  }

  ngOnInit () {
    console.log ( this.userList );
  }

  setAsSelected ( $event: User ) {
    this.selectedUsr = $event;
  }

  addNewUser () {
    this.$user.createUsers( {
      firstname: 'saban' + Math.floor ( Math.random () * 100 ),
      lastname : 'ünlü' + Math.floor ( Math.random () * 100 ),
    });
  }

  deleteUsr ( $event: User ) {
    const ind = this.userList.indexOf( $event );
    if ( ind !== -1 ) {
      this.userList.splice( ind,  1 );
    }
  }
}
