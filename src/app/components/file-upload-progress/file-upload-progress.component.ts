/*
 * File: file-upload-progress.component.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 6:00:30 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 9:59:40 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-file-upload-progress',
  templateUrl: './file-upload-progress.component.html',
  styleUrls: ['./file-upload-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadProgressComponent implements OnInit {
  @Input() progress = 80;
  @Input() fileName = 'N/A';
  constructor() {}

  ngOnInit(): void {}
}
