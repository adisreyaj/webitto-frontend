/*
 * File: webitto-stroked-button.directive.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 10:22:34 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 10:24:17 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[webitto-stroked-button]',
})
export class WebittoStrokedButtonDirective {
  @Input('color')
  set color(value: string) {
    switch (value) {
      case 'primary': {
        this.renderer.addClass(this.el.nativeElement, 'primary');
      }
      case 'warn': {
        this.renderer.addClass(this.el.nativeElement, 'warn');
      }
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.changeBgColor();
  }

  private changeBgColor() {
    this.renderer.addClass(this.el.nativeElement, 'webitto-stroked-button');
  }
}
