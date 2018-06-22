import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { User } from './user/user';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { filter, map } from 'rxjs/operators';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component ( {
  selector   : 'pta-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'pta';

  list: User[] = [
    { firstname: 'saban', lastname: 'ünlü' },
    { firstname: 'peter', lastname: 'müller' },
    { firstname: 'hans', lastname: 'mayer' }
  ];

  myFirstName = 'saban ünlü';

  constructor () {
    // console.log ( environment.endpoint );

    // this.initOf ();
    // this.initCreate ();
    // this.initFromEvent ();

    this.initHot ();
  }

  private initOf () {
    const observalble: Observable<number> = of ( 1, 2, 3 );

    observalble.subscribe (
      next => {
        console.log ( next );
      },
      error => {
        console.log ( error );
      },
      () => {
        console.log ( 'ich habe fertig' );
      }
    );
    setTimeout ( () => {
      observalble.subscribe (
        next => {
          console.log ( next );
        },
        error => {
          console.log ( error );
        },
        () => {
          console.log ( 'ich habe fertig' );
        }
      );
    }, 1000 );
  }

  private initCreate () {
    const observalble: Observable<number> = Observable.create ( observer => {
      observer.next ( 1 );
      observer.next ( 2 );
      observer.next ( 3 );
      // observer.error ( 'ups da ist was nicht iO' );
      observer.next ( 4 );
      observer.complete ();

      // setTimeout( () => {
      //   observer.next ( 5 );
      // }, 500 );

    } );

    observalble.pipe (
      filter ( val => val % 2 === 0 ),
      map ( val => val * 10 )
    )
               .subscribe (
                 next => {
                   console.log ( next );
                 },
                 error => {
                   console.log ( error );
                 },
                 () => {
                   console.log ( 'ich habe fertig' );
                 }
               );
  }

  private initFromEvent () {
    const observable = fromEvent<MouseEvent> ( document, 'mousemove' )
      .pipe (
        map ( me => me.clientX ),
        filter ( x => x < 100 )
      );
    observable.subscribe ( n => console.log ( n ) );
  }

  private initHot () {

    // const observable: Subject<number> = new Subject<number> ();

    const observable: BehaviorSubject<number> = new BehaviorSubject<number> ( null );

    observable.next ( 1 );
    observable.next ( 2 );

    observable.subscribe ( next => console.log ( '1st', next ) );

    observable.next ( 3 );
    observable.next ( 4 );

    observable.subscribe ( next => console.log ( '2st', next ) );

    observable.next ( 5 );
    observable.next ( 6 );

  }
}



























