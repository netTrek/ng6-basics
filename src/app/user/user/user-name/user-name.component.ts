import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
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


  @HostBinding ('style.color')
  @Input ()
  color: undefined|string|number = undefined;

  constructor () {
  }

  ngOnInit () {

  }

  @HostListener ( 'click' )
  private selectThisUser () {
    this.userSelection.emit ( this.user );
  }

  // @HostListener ( 'window:resize', [ '$event' ] )
  // private resize ( event: Event ) {
  //   console.log ( event );
  // }

  // @HostListener( 'mouseenter', ['$event'] )
  // private selectThisUser ( $event: MouseEvent ) {
  //   console.log ( $event );
  //   this.userSelection.emit ( this.user );
  // }
}
