import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user';

@Component ( {
  selector   : 'pta-user-name',
  templateUrl: './user-name.component.html',
  styleUrls  : [ './user-name.component.scss' ]
} )
export class UserNameComponent implements OnInit {

  @Input ()
  user: User;

  constructor () {
  }

  ngOnInit () {
  }

}
