import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any[] | string, add?: any ): any[]  | string {
    if ( typeof value === 'string' ) {
      if ( !! add ) {
        return (value + add).split('').reverse().join('');
      }
      return value.split('').reverse().join('');
    }
    if ( !! add ) {
      return [...value, add].reverse();
    }
    return value.reverse();
  }

}
