import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'dg-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  width = 100;

  constructor() { }

  ngOnInit() {
    interval( 1000 )
      .pipe(
        take( 10 ),
        map( input => 100 - ( input + 1 ) * 10 )
      )
      .subscribe(
        newVal => this.width = newVal,
        error => {
          console.error( error );
        },
        () => {
          console.log ( 'ich bin fertig' );
        }
      );

  }

}
