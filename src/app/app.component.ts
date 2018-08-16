import { Component } from '@angular/core';

@Component ( {
  selector   : 'dg-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'datagroup';

  sagWas ( prefix: string = 'ich bin '): string {
    // return `${prefix}${this.title}`;
    return prefix + this.title;
  }

  chgTitle ( newTitle: string ) {
    this.title = newTitle;
  }
}
