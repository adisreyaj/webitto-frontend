/*
 * File: pwa-download.component.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 11:53:41 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 2nd May 2020 4:33:26 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FileUploadService } from '../../../core/services/file-upload/file-upload.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pwa-download',
  templateUrl: './pwa-download.component.html',
  styleUrls: ['./pwa-download.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PwaDownloadComponent implements OnInit {
  sectionHeader = {
    title: 'Your Download is Ready',
    subtitle: `Your PWA assets are resized and packaged into a ZIP file for you to download.
         Extract the file and copy the images to the desired location. You can then update the images in the Web Manifest.
         Your PWA is ready to rock!
         `,
  };

  constructor(
    private fileUploadService: FileUploadService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const fileId = this.activatedRoute.snapshot.params.id;
    if (!fileId) this.router.navigate(['/pwa']);
  }

  downloadAssets() {
    const fileId = this.activatedRoute.snapshot.params.id;
    this.fileUploadService.downloadFile(fileId).subscribe((data: any) => {
      this.extractData(data);
    });
  }

  goBack() {
    this.router.navigate(['/pwa']);
  }

  private extractData(res: string) {
    let myBlob: Blob = new Blob([res], {
      type: 'application/zip',
    });
    const fileURL = URL.createObjectURL(myBlob);
    const win = window.open(fileURL, '_blank');
    win.opener = null;
    win.focus();
  }
}
