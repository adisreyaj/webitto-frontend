/*
 * File: file-upload-preview.component.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 10:40:35 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 10:59:15 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-file-upload-preview',
  templateUrl: './file-upload-preview.component.html',
  styleUrls: ['./file-upload-preview.component.scss'],
})
export class FileUploadPreviewComponent implements OnInit {
  @Input('file')
  set file(file: File) {
    this.readFile(file);
  }

  fileBase64: SafeUrl;
  constructor(private sanitizerService: DomSanitizer) {}

  ngOnInit(): void {}

  readFile(file: File) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      this.fileBase64 = this.sanitizerService.bypassSecurityTrustUrl(
        fileReader.result as string,
      );
    };
  }
}
