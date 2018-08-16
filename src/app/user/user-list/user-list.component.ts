import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component ( {
  selector   : 'dg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ],
  providers: [UserService]
} )
export class UserListComponent implements OnInit {

  title          = 'ich bin eine liste';

  constructor ( public $user: UserService ) {
  }


  ngOnInit () {
  }
}
