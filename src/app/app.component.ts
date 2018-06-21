import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component ( {
  selector   : 'pta-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'pta';
  constructor () {
    console.log ( environment.endpoint );
    if ( environment.production ) {
      console.log ( 'ich bin prod' );
    } else {
      console.log ( 'ich bin dev');
    }
  }
}
