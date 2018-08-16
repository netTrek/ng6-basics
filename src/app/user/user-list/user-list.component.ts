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
  classList = 'product bold';

  constructor () {
  }


  ngOnInit () {
  }

  selectUsr ( usr: User ) {
    console.log ( usr );
    this.selectedUsrInd = this.userList.indexOf ( usr );
  }

  addNewUser ( input: HTMLInputElement) {
    this.userList.push( {
      firstname: input.value, lastname: 'angular'
    });
    input.value = '';
  }
}
