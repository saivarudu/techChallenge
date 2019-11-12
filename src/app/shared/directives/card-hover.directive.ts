import { Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  @HostListener('mouseover') onMouseOver() {
    this.ChangeBgColor('#17a2b8');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ChangeBgColor('white');
  }

  ChangeBgColor(x) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', x);
  }

}
