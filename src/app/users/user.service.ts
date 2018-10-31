import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  selectedUsr: BehaviorSubject<User> = new BehaviorSubject(undefined);

  users: User[] = [
    { lastname: 'Ünlü', firstname: 'Saban', age: 44 },
    { lastname: 'Müller', firstname: 'Peter', age: 33 },
    { lastname: 'Musterfrau', firstname: 'Heike', age: 33 }
  ];

  constructor () {
  }

  deleteUser ( user: User ) {
    if ( user === this.selectedUsr.getValue() ) {
      // this.selectedUsr = undefined;
      this.selectedUsr.next( undefined );
    }
    this.users.splice( this.users.indexOf(user), 1 );
  }

  cloneUser ( user: User ) {
    this.users.push( {... user} );
  }

  selectUser ( user: User ) {
    if ( user === this.selectedUsr.getValue() ) {
      // this.selectedUsr = undefined;
      this.selectedUsr.next( undefined );
    } else {
      // this.selectedUsr = user;
      this.selectedUsr.next( user);
    }
  }

}
