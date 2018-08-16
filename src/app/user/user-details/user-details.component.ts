import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'dg-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  id: string;
  user: User;

  constructor( private router: ActivatedRoute, private $user: UserService ) { }

  ngOnInit() {
    this.router.paramMap.pipe(
      map( paramsMap => paramsMap.get( 'id' ))
    )
      .subscribe(
        next => {
          this.id = next;
          this.$user.getUserById( Number (this.id) ).then(
            user => this.user = user
          )
        }
      )
  }

}
