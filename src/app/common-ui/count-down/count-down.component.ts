import { Component, OnDestroy, OnInit } from '@angular/core';

@Component ( {
  selector   : 'pta-count-down',
  templateUrl: './count-down.component.html',
  styleUrls  : [ './count-down.component.scss' ]
} )
export class CountDownComponent implements OnInit, OnDestroy {

  countdown = 100;

  private intervalId: number | undefined;

  constructor () {
  }

  ngOnInit () {
    this.startInterval();
  }

  ngOnDestroy (): void {
    this.stopInterval ();
  }

  reset () {
    this.countdown = 100;
    this.startInterval();
  }


  restWithPayload ( event: Event ) {
    console.log ( event );
  }

  private startInterval () {
    this.stopInterval();
    this.intervalId = window.setInterval ( () => {
      this.countdown -= 10;
      if ( this.countdown === 0 ) {
        this.stopInterval ();
      }
    }, 1000 );
  }

  private stopInterval () {
    if ( !! this.intervalId ) {
      window.clearInterval( this.intervalId );
      this.intervalId = undefined;
    }
  }
}
