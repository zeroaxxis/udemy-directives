import {Directive, ElementRef, Renderer, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  // constructor(private elementRef: ElementRef, private renderer: Renderer) {
  //   // this.elementRef.nativeElement.style.backgroundColor = 'green';
  //   // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green')
  // }

  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = 'green'
  };

  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = 'white'
  };

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  private backgroundColor = 'white'

}
