/*
 * File: header.component.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 2:19:13 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 12:50:11 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  private menuSubject = new BehaviorSubject(this.isMenuOpen);
  menuOpen$ = this.menuSubject.asObservable();

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuSubject.next(this.isMenuOpen);
  }
}
