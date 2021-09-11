import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  @Input() defaultColor:any = 'white';
  @Input() highlightColor:any  = 'yellow';

  constructor(//private el: ElementRef, 
    //private re: Renderer2
    ) {

   }

   ngOnInit(){
      this.backgroundColor = this.defaultColor;
   }
   @HostBinding('style.backgroundColor') backgroundColor: any;

}
