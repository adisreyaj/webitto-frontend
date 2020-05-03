/*
 * File: favicon-download.component.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 11:53:41 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 9:50:25 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FileUploadService } from '@services/file-upload/file-upload.service';
import { faviconHTMLCode } from '@config/favicon.config';
import { of } from 'rxjs';
import { snackbarOptions } from '@config/snackbar.config';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '@components/snackbar/snackbar.component';

@Component({
  selector: 'app-favicon-download',
  templateUrl: './favicon-download.component.html',
  styleUrls: ['./favicon-download.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaviconDownloadComponent implements OnInit {
  sectionHeader = {
    title: 'Your Download is Ready',
    subtitle: `Your Favicons are created and packaged into a ZIP file for you to download.
         Extract the file and copy the images to the desired location. Copy the code and add it to your entry HTML file.
         `,
  };
  code = of(faviconHTMLCode);
  constructor(
    private fileUploadService: FileUploadService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackbar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    const fileId = this.activatedRoute.snapshot.params.id;
    if (!fileId) this.router.navigate(['/favicon']);
  }

  downloadAssets() {
    const fileId = this.activatedRoute.snapshot.params.id;
    this.fileUploadService.downloadFile(fileId).subscribe((data: any) => {
      this.extractData(data);
    });
  }

  copyMeta() {
    this.showSnackbar({ type: 'success', message: 'Meta copied to clipboard!' });
  }

  goBack() {
    this.router.navigate(['/favicon-generator']);
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

  private showSnackbar({ message, type }: { message: string; type: 'error' | 'success' }) {
    const snackbarOptionsWithData = Object.assign(snackbarOptions, {
      data: {
        type,
        message,
      },
    });
    this.snackbar.openFromComponent(SnackbarComponent, snackbarOptionsWithData);
  }
}
