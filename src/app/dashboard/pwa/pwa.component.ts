/*
 * File: pwa.component.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 4:04:23 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 5:05:44 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';
import { FileValidationHelper } from '../../core/helpers/file-validation.helper';

@Component({
  selector: 'app-pwa',
  templateUrl: './pwa.component.html',
  styleUrls: ['./pwa.component.scss'],
})
export class PwaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fileSelected(file: File) {
    const isFileValid = FileValidationHelper.validatePWAIconFile(file).success;
    console.log({ isFileValid });
  }
}
