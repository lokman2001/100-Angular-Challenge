import { Directive, ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[appScale]'
})
export class ScaleDirective {

  constructor( public elementRef : ElementRef) { }

  @HostListener ("mouseover")
  public mouseover ():void{
    this.elementRef.nativeElement.style.transition = 'all 0.3s';
    this.elementRef.nativeElement.style.transform ='scale(1.25)'
  }
  @HostListener('mouseout')
  public mouseout ():void{
    this.elementRef.nativeElement.style.transform = 'scale(1.0)'
  }

}
