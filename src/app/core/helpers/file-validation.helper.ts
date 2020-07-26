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

export const SUPPORTEDIMAGESTYPE = ['image/jpeg', 'image/png', 'image/svg+xml', 'image/webp'];
export const ALLOWEDIMAGESIZE = 2000000;

export class FileValidationHelper {
  /**
   * Validate the given file
   * Check if the file is of the allowed type and
   * under the mentioned file size limit
   *
   * @param file - File to be validated
   * @param allowedMIMETypes - Allowed file mime type array
   * @param sizeLimit - Mamimum allowed file size
   */
  static validateFileProps(file: File, allowedMIMETypes = SUPPORTEDIMAGESTYPE, sizeLimit = ALLOWEDIMAGESIZE) {
    const fileType = file.type;
    const fileSize = file.size;
    if (!allowedMIMETypes.find((item) => item === fileType)) {
      return {
        success: false,
        error: 'Not a supported format',
      };
    }
    if (fileSize > sizeLimit) {
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
