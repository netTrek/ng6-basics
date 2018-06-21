import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component ( {
  selector   : 'pta-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'pta';

  myFirstName = 'saban ünlü';

  constructor () {
    console.log ( environment.endpoint );
  }
}
