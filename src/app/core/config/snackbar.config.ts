/*
 * File: snackbar.config.ts
 * Project: webitto-frontend
 * File Created: Saturday, 2nd May 2020 4:41:55 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 2nd May 2020 4:57:14 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { MatSnackBarConfig } from '@angular/material/snack-bar';

export const snackbarOptions: MatSnackBarConfig<any> = {
  duration: 3000,
  panelClass: 'webitto-snackbar',
  verticalPosition: 'bottom',
  horizontalPosition: 'right',
};
