import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user';

@Component ( {
  selector   : 'pta-user-name',
  templateUrl: './user-name.component.html',
  styleUrls  : [ './user-name.component.scss' ]
} )
export class UserNameComponent implements OnInit {

  @Input ()
  user: User;

  @Output ()
  userSelection: EventEmitter<User> = new EventEmitter<User> ();

  constructor () {
  }

  ngOnInit () {

  }

  selectThisUser () {
    this.userSelection.emit ( this.user );
  }
}
