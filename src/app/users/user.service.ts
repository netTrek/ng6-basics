import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  selectedUsr: User;

  users: User[] = [];

  constructor ( private $http: HttpClient ) {
    this.getUsers();
  }

  getUsers (): Promise<User[]> {
    return this.$http.get<User[]>( environment.endpoint )
      .pipe(
        tap(
          users => this.users = users // users.next ( users )
        )
      )
      .toPromise();
  }

  getUserById ( id: number ): Promise<User> {
    return this.$http.get<User>( environment.endpoint + '/' + id  )
      .toPromise();
  }

  createUser ( usr: User ): Promise<User> {
    return this.$http.post<User>( environment.endpoint, usr  )
               .toPromise();
  }

  delUser ( usr: User ): Promise<any> {
    return this.$http.delete<any>( environment.endpoint + '/' + usr.id  )
               .toPromise();
  }

  deleteUser ( user: User ) {
    if ( user === this.selectedUsr ) {
      this.selectedUsr = undefined;
    }
    // this.users.splice ( this.users.indexOf ( user ), 1 );
    this.delUser( user ).then( () => {
      this.getUsers();
    });
  }

  cloneUser ( user: User ) {
    // this.users.push ( { ...user } );
    const clone = { ...user };
    delete clone.id;
    this.createUser( clone ).then( () => {
      this.getUsers();
    });
  }

  selectUser ( user: User ) {
    if ( user === this.selectedUsr ) {
      this.selectedUsr = undefined;
    } else {
      this.selectedUsr = user;
      // zum spielen
      // this.getUserById( this.selectedUsr.id ).then(
      //   console.log
      // )
    }
  }

}
