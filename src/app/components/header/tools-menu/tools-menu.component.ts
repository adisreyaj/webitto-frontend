/*
 * File: tools-menu.component.ts
 * Project: webitto-frontend
 * File Created: Sunday, 3rd May 2020 12:00:33 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 8:00:00 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tools-menu',
  templateUrl: './tools-menu.component.html',
  styleUrls: ['./tools-menu.component.scss'],
})
export class ToolsMenuComponent implements OnInit {
  menuItems = [
    {
      link: 'pwa-assets-generator',
      title: 'PWA Assets Generator',
      icon: '../../../../assets/icons/pwa.svg',
    },
    {
      link: 'favicon-generator',
      title: 'Favicon Generator',
      icon: '../../../../assets/icons/favicon.svg',
    },
    {
      link: 'meta-tags',
      title: 'Meta Tags Generator',
      icon: '../../../../assets/icons/meta.svg',
    },
    {
      link: 'webp',
      title: 'WebP Image Converter',
      icon: '../../../../assets/icons/convert.svg',
    },
    {
      link: 'image-resizer',
      title: 'Image Resizer Tool',
      icon: '../../../../assets/icons/resizer.svg',
    },
    {
      link: 'image-optimizer',
      title: 'Image Optimizer Tool',
      icon: '../../../../assets/icons/optimizer.svg',
    },
  ];

  @Output() menuClosed = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  closeMenu() {
    this.menuClosed.emit();
  }
}
