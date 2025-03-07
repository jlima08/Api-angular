import { Directive, ElementRef, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective implements OnInit {

  element  = inject(ElementRef).nativeElement as HTMLElement;
  // constructor(private _elementRef: ElementRef , private _renderer: Renderer2) { 

    

  //    this._elementRef.nativeElement.style.backgroundColor = "yellow"
  //   // this._renderer.setStyle(
  //   //   this._elementRef.nativeElement,
  //   //   'background-color',
  //   //   'red'
  //   // );
  // }
  ngOnInit(): void {
    this.element.style.backgroundColor = 'yellow'
    this.element.style.width = '20%'
    this.element.style.textAlign = 'center'
  }

}
