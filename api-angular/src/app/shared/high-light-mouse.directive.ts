import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighLightMouse]'
})
export class HighLightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
      // this._renderer.setStyle(this._elementRef.nativeElement,
      //   'background-color', 'yellow'
      // );
      this.backC = 'yellow'
    }
  @HostListener('mouseleave') onMouseLeave(){
      // this._renderer.setStyle(this._elementRef.nativeElement,
      //   'background-color', 'white'
      // );
      this.backC = 'white'
  }

  @HostBinding('style.backgroundColor') backC!: string;

  constructor(private _elementRef: ElementRef , private _renderer: Renderer2) { }

}
