/*
 * File: file-upload.interface.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 9:35:36 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 7:53:00 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

export interface FileUploadOptions {
  file: File;
  id: string;
  sizes?: string[];
  format?: string;
  type: IconGenerateTypes;
}

export enum IconGenerateTypes {
  pwa = 'pwa',
  favicon = 'favicon',
}
