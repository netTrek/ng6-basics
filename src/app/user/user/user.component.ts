import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'pta-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit {
  defaultPrefix = 'Herr ';
  name = 'saban ünlü';
  nameWithPrefix: string;

  getName ( prefix: string = '' ): string {
    return `${prefix}${this.name}`;
  }

  ngOnInit (): void {
    this.nameWithPrefix = `${this.defaultPrefix} ${this.name}`;
  }

}
