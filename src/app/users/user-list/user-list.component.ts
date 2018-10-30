import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component ( {
  selector     : 'msg-user-list',
  templateUrl  : './user-list.component.html',
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
  prefix   = '';

  html = '<strong>Hello</strong> world <script>alert ("hack")</script>';

  imgUrl = 'assets/images/cat.jpg';
  imgAlt = 'cat';

  bgColor  = 'blue';
  boxWidth = 100;

  countdown = 100;
  private intervalID: number;

  constructor () {
  }

  ngOnInit () {
  }

  chgListName () {
    this.listName = 'angular rocks';
  }

  getListName ( prefix?: string ): string {

    // prefix = prefix || '';
    // if ( !prefix ) {
    //   prefix = '';
    // }

    return `${prefix ? prefix + ' ' : ''}${this.listName}`;
  }

  chgImg () {
    this.imgUrl = 'https://placebear.com/200/300';
    this.imgAlt = 'bear';
  }
}
