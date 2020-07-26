import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ReplaySubject } from 'rxjs';

export enum FitEnum {
  contain = 'contain',
  cover = 'cover',
  fill = 'fill',
  inside = 'inside',
  outside = 'outside',
}
export interface ConvertToWebPOptions {
  file: File;
  resize?: boolean;
  toPercentage?: number;
  toSize?: {
    width?: number;
    height?: number;
  };
  maintainAspectRatio?: boolean;
  fit?: FitEnum;
}

@Injectable({
  providedIn: 'root',
})
export class WebpConverterService {
  baseUrl = `${environment.api}/api/v1`;
  constructor(private http: HttpClient) {}
  convertImageToWebp({
    file,
    fit = FitEnum.contain,
    maintainAspectRatio = true,
    resize = false,
    toPercentage = null,
    toSize = null,
  }: ConvertToWebPOptions) {
    const formData: FormData = new FormData();
    formData.append('file', file);
    if (resize) {
      if (toSize) {
        if (toSize.width && toSize.height) {
          formData.append('toSize', JSON.stringify(toSize));
        }
        if (toSize.width && !toSize.height) {
          formData.append('toSize', JSON.stringify({ width: toSize.width }));
        }
        if (toSize.height && !toSize.width) {
          formData.append('toSize', JSON.stringify({ height: toSize.height }));
        }
      } else if (toPercentage) {
        formData.append('toPercentage', `${toPercentage}`);
      }
    }
    formData.append('maintainAspectRatio', JSON.stringify(maintainAspectRatio));
    formData.append('fit', fit);
    return this.http.post(`${this.baseUrl}/convert/webp`, formData, {
      reportProgress: true,
      observe: 'events',
      responseType: 'arraybuffer',
    });
  }
}
