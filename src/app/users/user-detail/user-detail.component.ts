import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { Subscription } from 'rxjs';

@Component ( {
  selector   : 'msg-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls  : [ './user-detail.component.scss' ]
} )
export class UserDetailComponent implements OnInit, OnDestroy {
  crrId: number;
  crrUser: User;

  private subs: Subscription[] = [];

  constructor ( private $route: ActivatedRoute, private $user: UserService ) {
  }

  ngOnInit () {

    console.log ( 'ini' );

    this.subs.push (
      this.$route.data.subscribe (
        next => {
          this.crrUser = next.user as User;
        }
      ) );

    this.subs.push (
      this.$route.paramMap
          .subscribe ( next => {
            this.crrId = Number ( next.get ( 'id' ) );
          } )
    );

  }

  ngOnDestroy (): void {
    while ( this.subs.length > 0 ) {
      this.subs.pop().unsubscribe();
    }
  }

}
