/*
 * File: file-validation.helper.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 4:49:08 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 5:05:38 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

export const SUPPORTEDIMAGESTYPE = ['image/jpeg', 'image/png', 'image/svg+xml'];
export const ALLOWEDIMAGESIZE = 2000000;

export class FileValidationHelper {
  static validatePWAIconFile(file: File) {
    const fileType = file.type;
    const fileSize = file.size;
    if (!SUPPORTEDIMAGESTYPE.find((item) => item === fileType)) {
      return {
        success: false,
        error: 'Not a supported format',
      };
    }
    if (fileSize > ALLOWEDIMAGESIZE) {
      return {
        success: false,
        error: 'File size exceeds limit',
      };
    }

    return {
      success: true,
    };
  }
}
