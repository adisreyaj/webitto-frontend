/*
 * File: file-upload-zone.component.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 3:55:13 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 11:50:03 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-file-upload-zone',
  templateUrl: './file-upload-zone.component.html',
  styleUrls: ['./file-upload-zone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadZoneComponent implements OnInit {
  @Output() fileSelected = new EventEmitter<File>();
  @ViewChild('fileInput') fileInput: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  /**
   * Listens to file browse event
   * @param event - file input event
   */
  inputFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.fileSelected.emit(file);
    }
    // To reset the input value. Otherwise it won't fire when same file is selected again
    this.fileInput.nativeElement.value = null;
  }

  /**
   * Listens to the file drop event
   * @param event - dropped file
   */
  fileChanged(event: File) {
    console.log({ event });
    this.fileSelected.emit(event);
  }
}
