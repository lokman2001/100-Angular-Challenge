import { AfterContentInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
})
export class AutoFocusDirective implements AfterContentInit {
  constructor(public elementRef: ElementRef<HTMLInputElement>) {}

  public ngAfterContentInit() {
    setTimeout(() => {
      if (this.elementRef.nativeElement) {
        this.elementRef.nativeElement.focus();
      }
    }, 50);
  }
}
