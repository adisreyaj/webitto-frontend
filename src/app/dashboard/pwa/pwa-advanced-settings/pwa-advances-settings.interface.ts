/*
 * File: pwa-advances-settings.interface.ts
 * Project: webitto-frontend
 * File Created: Sunday, 3rd May 2020 11:22:12 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 11:25:06 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { SupportedPWAIconFormats, SupportedSizes } from '@config/pwa.config';

export interface PWAAdvancesSettingsEvent {
  format: SupportedPWAIconFormats;
  sizes: SupportedSizes[];
}
