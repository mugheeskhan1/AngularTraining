import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor() { }

  //so hostBinding also working like renderer but is easy to use
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
    this.backgroundColor = 'pink';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }

}
