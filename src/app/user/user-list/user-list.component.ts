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

  @HostBinding ('style.font-size.px')
  fontsize = 20;



  constructor () {
  }

  ngOnInit () {
    console.log ( this.userList );
  }

  setAsSelected ( $event: User ) {
    this.selectedUsr       = $event;
  }
}
