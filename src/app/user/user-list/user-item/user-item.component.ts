import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dg-user-item',
  templateUrl: './user-item.component.html',
  // template: `<strong>user</strong>
  // <hr>`,
  styleUrls: ['./user-item.component.scss']
  // styles: [`h3 {
  //   color: red;
  // }`],
  // encapsulation: ViewEncapsulation.None
})
export class UserItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
