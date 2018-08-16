import { Injectable } from '@angular/core';
import { User } from './user';
import { last, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable ( { providedIn: 'root' } )
export class UserService {

  selectedUsrInd: number;

  userList: User[] = [];

  constructor ( private $http: HttpClient, private $router: Router  ) {
    this.getUserList();
  }

  getUserList (): Promise<User[]> {
    return this.$http.get<User[]> ( environment.endpoint )
               .pipe(
                 tap (
                   next => this.userList = next
                 )
               )
               .toPromise();
  }

  getUserById ( id: number ): Promise<User> {
    return this.$http.get<User> ( `${environment.endpoint}${id}` )
               .toPromise();
  }

  selectUsr ( usr: User ) {
    console.log ( usr );
    this.selectedUsrInd = this.userList.indexOf ( usr );
    this.$router.navigate( [ 'user', usr.id ] );
  }

  addNewUser ( input: HTMLInputElement | User ): Promise<User> {

    let firstname = null;
    let lastname  = null;

    if ( input instanceof HTMLInputElement ) {
      firstname = input.value;
      lastname  = 'angular';
    } else {
      firstname = input.firstname;
      lastname  = input.lastname;
    }
    const user: User = {
      firstname, lastname, birthday: '1999-09-09'
    };

    if ( input instanceof HTMLInputElement ) {
      input.value = '';
    }

    return this.$http.post<User>( environment.endpoint, user )
        .pipe(
          tap (
            next => this.getUserList()
          )
        )
        .toPromise();


  }

}
