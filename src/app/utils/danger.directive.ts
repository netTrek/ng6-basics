import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';
import { element } from 'protractor';

@Directive ( {
  selector: 'button[dgDanger], div[dgDanger]'
} )
export class DangerDirective implements OnInit {

  @HostBinding('style.color')
  color = 'red';

  constructor ( private elemRef: ElementRef, private renderer: Renderer2 ) {
  }

  ngOnInit (): void {
    // this.renderer.setStyle ( this.elemRef.nativeElement, 'color', 'red' );
    this.renderer.setStyle ( this.elemRef.nativeElement, 'fontFamily', 'Arial' );
  }

  @HostListener('mouseenter')
  hover () {
    this.color = 'blue';
  }

  @HostListener('mouseleave')
  leave () {
    this.color = 'red';
  }

}
