import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDynamicDirectiveBinding]'
})
export class DynamicDirectiveBindingDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  
  constructor() {}

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
