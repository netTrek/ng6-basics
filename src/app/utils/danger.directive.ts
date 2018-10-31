import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[msgDanger]'
})
export class DangerDirective implements OnInit {

  @Input() msgDanger: string;

  private btn: HTMLElement;

  constructor( elemRef: ElementRef, private renderer: Renderer2 ) {
    this.btn = elemRef.nativeElement as HTMLElement;
  }

  ngOnInit (): void {
    this.addStyles ();
  }

  private addStyles () {
    // nicht so falls universal!!!
    // this.btn.style.backgroundColor = 'red';
    // Renderer2 ist Plattform unabh!
    // this.renderer.setStyle( this.btn, 'backgroundColor', 'yellow' );

    const className = this.msgDanger === '' || !this.msgDanger ? 'danger' : this.msgDanger;

    this.renderer.addClass(
      this.btn,
      className
    );
  }
}
