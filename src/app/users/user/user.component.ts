import { Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../user';

@Component ( {
  selector   : 'msg-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit, OnChanges {

  @Input () user: User;
  @Output () userSelected: EventEmitter<User> = new EventEmitter ();

  @Input ()
  @HostBinding ( 'class.selected' )
  isSelected = false;

  constructor () {
  }

  ngOnInit () {
  }

  @HostListener ( 'click', [ '$event' ] )
  dispatchUserEvent ( event: MouseEvent ) {
    if ( event.target instanceof HTMLButtonElement ) {
      console.log ( 'mach nix' );
    } else {
      this.userSelected.emit ( this.user );
    }
  }

  // @HostListener ( 'click', [ '$event' ] )
  // zweiterKlickHandler ( event: MouseEvent ) {
  //   console.log ( 'nur zum spielen', event );
  // }

  ngOnChanges ( changes: SimpleChanges ): void {
    // debugger;
    if ( changes.user ) {
      console.log ( (changes.user.currentValue as User).firstname );
    }
  }

  testBtnClicked () {
    console.log ( 'test button clicked' );
  }
}
