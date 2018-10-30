import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  selectUser ( user: User ) {
    this.selectedUsr = user;
  }

}
