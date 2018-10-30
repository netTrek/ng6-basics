import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component ( {
  selector     : 'msg-user-list',
  templateUrl: './user-list.component.html',
  // template     : `
  //   <h1>UserLister</h1>
  //   <ul>
  //     <li>Hello</li>
  //     <li>World</li>
  //     <li>List</li>
  //   </ul>
  // `,
  styleUrls    : [ './user-list.component.scss' ],
  // styles  : [ `
  //               li {
  //                   color: red;
  //               }
  //             `]
  // encapsulation: ViewEncapsulation.None
  encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.Native
} )
export class UserListComponent implements OnInit {

  listName = 'Ich bin eine User Liste';
  prefix = '';

  constructor () {
  }

  ngOnInit () {
  }

  chgListName () {
    this.listName = 'angular rocks';
  }

  getListName ( prefix?: string ): string {
    return `${prefix ? prefix + ' ' : ''}${this.listName}`;
  }
}
