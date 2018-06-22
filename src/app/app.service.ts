/**
 * File created by suenlue on 22.06.18.
 * Copyright (c) 2018 by netTrek GmbH & Co. KG
 */
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export class AppService {
  myVal: BehaviorSubject<number> = new BehaviorSubject<number>(123);
  chgVal () {
    this.myVal.next( this.myVal.getValue() + 1 );
  }
}
