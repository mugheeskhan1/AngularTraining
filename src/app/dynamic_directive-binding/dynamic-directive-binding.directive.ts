import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDynamicDirectiveBinding]'
})
export class DynamicDirectiveBindingDirective {
  @Input() defaultColor: string = 'transparent';
  @Input('appDynamicDirectiveBinding') highlightedColor: string = 'pink';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor() { }

  //so hostBinding also working like renderer but is easy to use
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
    this.backgroundColor = this.highlightedColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.backgroundColor;
  }

}
