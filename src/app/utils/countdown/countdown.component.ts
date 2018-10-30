import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'msg-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  private countdown: number;
  private intervalID = -1;

  constructor() { }

  ngOnInit() {
    this.startCountDown();
  }

  ngOnDestroy (): void {
    this.dispose ();
  }

  private startCountDown () {
    this.countdown = 100;
    this.intervalID = setInterval( () => {
      this.countdown -= 10;
      if ( this.countdown === 0 ) {
        this.dispose ();
      }
    }, 1000 );
  }

  private dispose () {
    if ( this.intervalID !== -1 ) {
      clearInterval( this.intervalID );
      this.intervalID = -1;
    }
  }
}
