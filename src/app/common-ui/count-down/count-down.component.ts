import { Component, OnDestroy, OnInit } from '@angular/core';

@Component ( {
  selector   : 'pta-count-down',
  templateUrl: './count-down.component.html',
  styleUrls  : [ './count-down.component.scss' ]
} )
export class CountDownComponent implements OnInit, OnDestroy {

  startValue = 100;

  private intervalId: number | undefined;

  constructor () {
  }

  ngOnInit () {
    this.intervalId = window.setInterval ( () => {
      this.startValue -= 10;
      if ( this.startValue === 0 ) {
        this.stopInterval ();
      }
    }, 1000 );
  }

  ngOnDestroy (): void {
    this.stopInterval ();
  }

  private stopInterval () {
    if ( !! this.intervalId ) {
      window.clearInterval( this.intervalId );
      this.intervalId = undefined;
    }
  }
}
