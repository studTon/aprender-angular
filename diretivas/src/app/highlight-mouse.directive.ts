import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') onMouseOver(){
    //this.re.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave(){
    //this.re.setStyle(this.el.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }
  

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  

  constructor(//private el: ElementRef, 
    //private re: Renderer2
    ) {

   }

   @HostBinding('style.backgroundColor') backgroundColor: any;
}
