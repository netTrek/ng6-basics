import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  selectedUsr: User;

  users: User[] = [
    { lastname: 'Ünlü', firstname: 'Saban', age: 44 },
    { lastname: 'Müller', firstname: 'Peter', age: 33 },
    { lastname: 'Musterfrau', firstname: 'Heike', age: 33 }
  ];

  constructor () {
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

}
