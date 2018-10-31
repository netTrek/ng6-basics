import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Directive ( {
  selector: '[msgGaEvent]'
} )
export class GaEventDirective implements OnInit, OnDestroy {

  @Input () msgGaEvent: string;
  private elem: HTMLElement;
  private listener: () => void;

  constructor ( elemRef: ElementRef ) {
    this.elem = elemRef.nativeElement as HTMLElement;
  }

  ngOnInit (): void {
    if ( this.msgGaEvent === '' || ! this.msgGaEvent ) {
      throw new Error ( 'Bitte Eventnamen definieren' );
    }
    this.listener = () => {
      // TODO hier GA ansprechen;
      console.log ( 'tag', this.msgGaEvent );
    };
    // if ( environment.production ) { // falls kontrolliert werden soll ob produktiv
      this.elem.addEventListener ( 'click', this.listener );
    // }
  }

  ngOnDestroy (): void {
    this.elem.removeEventListener( 'click', this.listener );
  }

}
