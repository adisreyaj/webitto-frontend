/*
 * File: webitto-button.directive.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 7:49:19 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 8:20:31 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import {
  Directive,
  HostBinding,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[webitto-button]',
})
export class WebittoButtonDirective {
  @Input('color')
  set color(value: string) {
    switch (value) {
      case 'primary': {
        this.renderer.addClass(this.el.nativeElement, 'primary');
      }
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.changeBgColor();
  }

  private changeBgColor() {
    this.renderer.addClass(this.el.nativeElement, 'webitto-button');
  }
}
