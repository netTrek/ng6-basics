import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { UserService } from './user/user.service';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from './user/user';

@Component ( {
  selector   : 'dg-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  pi = Math.PI;

  /*
  cat = 'https://bilder4.n-tv.de/img/incoming/crop20227687/1374993862-cImg_16_9-w680/Katze.jpg';

  ariaLabel = 'das ist ein Bild einer Katze';
  */

  title = 'datagroup';
/*  fontColor = 'green';

  width = 10;

  styleObj = {
    color: 'red', backgroundColor: 'yellow'
  };*/

  /*
  htmlString = `hallo <strong>welt</strong><script >
alert('diese seite ist blöd');
</script>`;
*/

  constructor ( private dp: DecimalPipe, public $user: UserService ) {
    console.log ( dp.transform( this.pi ) );

    interval( 1000 ).pipe(take(1)).subscribe(
      next => {
        this.$user.addNewUser( <User>{ firstname: 'super', lastname: 'oder'} );
      }
    );
  }

  sagWas ( prefix: string = 'ich bin '): string {
    // return `${prefix}${this.title}`;
    return prefix + this.title;
  }

  chgTitle ( newTitle: string ) {
    this.title = newTitle;
  }
}
