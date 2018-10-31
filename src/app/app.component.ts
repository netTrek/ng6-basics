import { Component } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, Observable, of, range, Subject, Subscription } from 'rxjs';
import { filter, first, map, take } from 'rxjs/operators';
import { UserService } from './users/user.service';

@Component ( {
  selector   : 'msg-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  createAt = new Date ();
  num      = Math.PI;
  title    = 'msg';

  constructor ( public $user: UserService ) {
    // this.initOf ();
    // this.initRange ();
    // this.initInterval ();
    // this.initNew ();
    // this.initNew2 ();
    // this.initSub ();
    // this.initBehaviourSub ();
    // this.initFromEvent ();
  }

  private initFromEvent () {
    // nie im realen leben bitte!!!
    const observable: Observable<MouseEvent> = fromEvent<MouseEvent>( document, 'mousemove' )
      .pipe(
        filter ( event => event.clientX > 120 )
      );
    this.subscripe( observable );
  }

  private initBehaviourSub () {
    const sub: BehaviorSubject<number> = new BehaviorSubject ( 0 );
    this.subscripe ( sub );

    sub.next ( 1 );
    this.subscripe ( sub );
    sub.next ( 2 );
    sub.next ( 3 );

    this.subscripe ( sub );

    sub.next ( 4 );
    sub.next ( 5 );

  }

  private initSub () {
    const sub: Subject<number> = new Subject ();

    sub.next ( 1 );
    this.subscripe ( sub );
    sub.next ( 2 );
    sub.next ( 3 );

    this.subscripe ( sub );

    sub.next ( 4 );
    sub.next ( 5 );

  }

  private initNew2 () {
    const observable: Observable<number> = new Observable ( observer => {
      let count        = 0;
      const intervalID = window.setInterval ( () => {
        observer.next ( count ++ );
        console.log ( 'inner val', count );
      }, 500 );

      return {
        unsubscribe () {
          window.clearInterval ( intervalID );
        }
      };

    } );

    const subscription = this.subscripe<number> ( observable );
    interval ( 1500 )
      .pipe ( first () )
      .subscribe ( next => {
        subscription.unsubscribe ();
      } );
  }

  private initNew () {
    const observable: Observable<number> = new Observable ( observer => {
      observer.next ( 1 );
      observer.next ( 2 );
      observer.error ( 'ups .... fehler ' );
      observer.next ( 3 );
      observer.complete ();
      observer.next ( 4 );
    } );
    const subscription                   = this.subscripe<number> ( observable );
  }

  private initInterval () {
    const observable: Observable<number> = interval ( 500 )
      .pipe (
        // take( 5 ),
        map ( next => next + 1 ),
        filter ( next => next % 2 === 0 )
      );

    const subscription = this.subscripe<number> ( observable );
    // console.log ( subscription );
    // subscription.unsubscribe();
  }

  private initOf () {
    const observable: Observable<number> = of ( 1, 2, 3 );
    const subscription                   = this.subscripe<number> ( observable );
    console.log ( subscription );
    // subscription.unsubscribe();
  }

  private initRange () {
    const observable: Observable<number> = range ( 2, 10 );
    const subscription                   = this.subscripe<number> ( observable );
    console.log ( subscription );
    // subscription.unsubscribe();
  }

  private subscripe<T> ( observable: Observable<T> ): Subscription {
    return observable.subscribe (
      // ( next ) => {
      //   console.log ( next );
      // }
      next => {
        console.log ( next );
      },
      // console.log
      // next => console.log( next )
      fehler => {
        console.log ( 'err', fehler );
      },
      () => {
        console.log ( 'Ich habe fertig' );
      }
    );
  }
}
