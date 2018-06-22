import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]> ( [] );

  constructor ( private $http: HttpClient ) {
    this.getUsers ();
  }

  getUsers () {
    this.$http.get<User[]> ( 'http://rest-api.flexlab.de/index.php/api/user' )
        .subscribe ( n => this.users$.next ( n ) );
  }

  createUsers ( user: User ) {
    this.$http.post<User> ( 'http://rest-api.flexlab.de/index.php/api/user', user )
        .subscribe ( newUser => {
          const users: User[] = this.users$.getValue();
          this.users$.next( [ ...users, newUser ] );
        });
  }

}
