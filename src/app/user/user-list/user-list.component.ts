import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  title = 'ich bin eine liste';

  constructor() { }

  ngOnInit() {
  }

}
