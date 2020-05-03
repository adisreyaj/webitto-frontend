/*
 * File: code.component.ts
 * Project: webitto-frontend
 * File Created: Sunday, 3rd May 2020 8:37:46 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 9:07:16 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { formatCode } from './code.helper';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  @Input('snippet') snippet$: Observable<string>;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  getCodeFormatted(code: string) {
    const formatted = formatCode(code);
    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }
}
