import {
  Component,
  ElementRef,
  EventEmitter, HostBinding, HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { User } from '../../user';

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
export class UserItemComponent implements OnInit, OnChanges {

  @Input() user: User;
  @Output() selectedUser: EventEmitter<User> = new EventEmitter();

  @Input()
  @HostBinding ('class.selected')
  selected = false;

  constructor() { }

  ngOnInit() {
  }

  // @HostListener('click', [ '$event', 'user' ] ) // mit opt Payload
  @HostListener('click' ) // ohne
  setAsSelected ( evt?: MouseEvent, user?: User ) {
    // debugger
    this.selectedUser.emit( this.user );
  }


  ngOnChanges ( changes: SimpleChanges ): void {
    // debugger
    // console.log( 'ss' );
  }
}
