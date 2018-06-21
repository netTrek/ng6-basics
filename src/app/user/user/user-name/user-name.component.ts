import { Component, Input, OnInit } from '@angular/core';

@Component ( {
  selector   : 'pta-user-name',
  templateUrl: './user-name.component.html',
  styleUrls  : [ './user-name.component.scss' ]
} )
export class UserNameComponent implements OnInit {

  @Input ()
  firstname: string;

  constructor () {
  }

  ngOnInit () {
  }

}
