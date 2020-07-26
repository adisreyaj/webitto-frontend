/*
 * File: file-upload-preview.component.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 10:40:35 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 2nd May 2020 1:01:46 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-file-upload-preview',
  templateUrl: './file-upload-preview.component.html',
  styleUrls: ['./file-upload-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadPreviewComponent implements OnInit {
  private currentFile: File | Blob;
  @Input('file')
  set file(file: File | Blob) {
    this.currentFile = file;
    this.readFile(file);
  }

  get file() {
    return this.currentFile;
  }

  private imagePreviewSubject = new ReplaySubject(1);
  imagePreviewURI = this.imagePreviewSubject.asObservable();
  constructor(private sanitizerService: DomSanitizer) {}

  ngOnInit(): void {}

  readFile(file: File | Blob) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      const sanitizedURL = this.sanitizerService.bypassSecurityTrustUrl(fileReader.result as string);
      this.imagePreviewSubject.next(sanitizedURL);
    };
  }
}
