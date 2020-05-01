/*
 * File: file-upload.directive.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 4:28:59 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 5:08:39 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import {
  Directive,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[fileUpload]',
})
export class FileUploadDirective {
  @Output() fileChange = new EventEmitter<File>();
  @Output() hovered = new EventEmitter<boolean>();
  @Input() preventBodyDrop = true;

  @HostBinding('class.active')
  active = false;
  constructor() {}

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.active = false;
    const { dataTransfer } = event;
    if (dataTransfer.items) {
      if (dataTransfer.items.length > 1)
        throw new Error('Only select single file');
      if (dataTransfer.items[0].kind === 'file') {
        const file = dataTransfer.items[0].getAsFile();
        dataTransfer.items.clear();
        this.fileChange.emit(file);
      } else {
        const files = dataTransfer.files;
        dataTransfer.clearData();
        this.fileChange.emit(files[0]);
      }
    }
  }
  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.active = true;
    this.hovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave() {
    this.active = false;
    this.hovered.emit(false);
  }

  @HostListener('body:dragover', ['$event'])
  onBodyDragOver(event: DragEvent) {
    if (this.preventBodyDrop) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  @HostListener('body:drop', ['$event'])
  onBodyDrop(event: DragEvent) {
    if (this.preventBodyDrop) {
      event.preventDefault();
    }
  }
}
