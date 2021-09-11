import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]',
  
})

export class FundoAmareloDirective {
  constructor(el: ElementRef, private re: Renderer2) { }
  //Se precisar visualizar um elemento basta utilizar o console.log(this._elementRef);
  
  //this.el.nativeElement.style.backgroundColor = 'yellow';
  this.re.setStyle(this.el.nativeElement,'background-color','yellow')
}
