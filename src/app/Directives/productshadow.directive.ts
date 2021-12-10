import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appProductshadow]'
})
export class ProductshadowDirective implements OnChanges {
@Input('appProductshadow') pgcolor:string="";
  constructor(private element:ElementRef) { 

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.element.nativeElement.style.backgroundColor = this.pgcolor;
  }


  @HostListener('mouseover')  onMouseOver(){
    this.element.nativeElement.style.boxShadow ="10px 20px 30px blue";

  }
  @HostListener('mouseout') onMouseOut(){
    this.element.nativeElement.style.boxShadow ="";

  }

}
