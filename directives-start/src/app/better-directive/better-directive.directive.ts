import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective {

  @Input() defaultColor : string = 'blue';
  @Input() highlightColor : string = 'transparent';

  constructor(private renderer : Renderer2, private elRef : ElementRef) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor : string;

  @HostListener('mouseenter') mouseover(eventData : Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor);
  }

  @HostListener('mouseleave') mouseleave(eventData : Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.highlightColor);
  }

}
