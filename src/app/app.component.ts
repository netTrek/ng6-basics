import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { User } from './user/user';

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
    console.log ( environment.endpoint );
  }
}
