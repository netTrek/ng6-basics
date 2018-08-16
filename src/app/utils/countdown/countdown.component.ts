import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component ( {
  selector   : 'dg-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements OnInit, OnDestroy {

  width                        = 100;
  private subs: Subscription[] = [];

  constructor () {
  }

  ngOnInit () {
    this.subs.push (
      interval ( 1000 )
        .pipe (
          take ( 10 ),
          map ( input => 100 - (input + 1) * 10 )
        )
        .subscribe (
          newVal => this.width = newVal,
          error => {
            console.error ( error );
          },
          () => {
            console.log ( 'ich bin fertig' );
          }
        ) );

  }

  ngOnDestroy (): void {
    while ( this.subs.length > 0  ) {
      this.subs.pop().unsubscribe();
    }
  }

}
