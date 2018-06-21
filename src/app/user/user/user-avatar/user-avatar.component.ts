import { Component, OnInit } from '@angular/core';

@Component ( {
  selector : 'pta-user-avatar',
  templateUrl: './user-avatar.component.html',
  // template : `<h2>avatar</h2>
  // <h3>dasda</h3>`, // inline-template
  styleUrls: [ './user-avatar.component.scss' ]
  // styles: [ `p {
  //   color: blue;
  // }`] // inlinet-style
} )
export class UserAvatarComponent implements OnInit {

  constructor () {
    // const test1 = '123';
    // const test2 = `value of test1:= ${test1}`; // template
  }

  ngOnInit () {
  }

}
