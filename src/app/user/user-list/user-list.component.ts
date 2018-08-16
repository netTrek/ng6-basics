import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component ( {
  selector   : 'dg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  userList: User[] = [
    { firstname: 'saban', lastname: 'ünlü' },
    { firstname: 'peter', lastname: 'müller' },
    { firstname: 'heike', lastname: 'maier' }
  ];

  title          = 'ich bin eine liste';
  selectedUsrInd = 0;
  myUser: User   = {
    firstname: 'hans', lastname: 'müller'
  };

  show = true;

  constructor () {
  }


  chgUser () {
    const firstname = 'saban';
    const lastname = 'ünlü';
    this.myUser = { firstname, lastname };
    // this.myUser = { firstname: firstname, lastname: lastname };
    // this.myUser = { firstname: 'saban', lastname: 'ünlü'};
  }

  ngOnInit () {
  }

  selectUsr ( usr: User ) {
    console.log ( usr );
    this.selectedUsrInd = this.userList.indexOf ( usr );
  }
}
