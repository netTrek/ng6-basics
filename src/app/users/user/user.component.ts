import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'msg-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Output() userSelected: EventEmitter<User> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectUser () {
    this.userSelected.emit( this.user );
  }
}
