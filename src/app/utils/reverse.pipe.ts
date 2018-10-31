import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe({
  name: 'reverse' // , pure: false
})
export class ReversePipe implements PipeTransform {

  transform(value: string|any[], args?: any): string|any[] {
    if ( isArray( value ) ) {
      return ( value as any[] ).reverse();
    } else if ( typeof value === 'string' ) {
      return value.split('').reverse().join('');
    }
    return value;
  }

}
