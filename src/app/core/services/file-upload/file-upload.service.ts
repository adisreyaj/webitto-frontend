/*
 * File: file-upload.service.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 6:53:05 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 1:03:50 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { FileUploadOptions } from './file-upload.interface';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  baseUrl = `${environment.api}/api/v1`;
  constructor(private http: HttpClient) {}

  uploadFiles({ file, id, format = null, sizes = null }: FileUploadOptions) {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('id', id);
    if (format) formData.append('format', format);
    if (sizes) formData.append('sizes', `${sizes}`);
    return this.http
      .post(`${this.baseUrl}/pwa-assets`, formData, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(catchError(this.handleError));
  }

  downloadFile(id: string) {
    return this.http.get(`${this.baseUrl}/pwa-assets/download/${id}`, {
      responseType: 'arraybuffer',
    });
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
