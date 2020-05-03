/*
 * File: pwa-advanced-settings.component.ts
 * Project: webitto-frontend
 * File Created: Sunday, 3rd May 2020 11:19:24 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 12:31:58 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { PWAAdvancesSettingsEvent } from './pwa-advances-settings.interface';
import { SupportedPWAIconFormats, SupportedSizes } from '@config/pwa.config';

@Component({
  selector: 'app-pwa-advanced-settings',
  templateUrl: './pwa-advanced-settings.component.html',
  styleUrls: ['./pwa-advanced-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PwaAdvancedSettingsComponent implements OnInit {
  @Output() settingsChanged = new EventEmitter<PWAAdvancesSettingsEvent>();
  @Output() settingsApplied = new EventEmitter<boolean>();

  selectedFormat = SupportedPWAIconFormats.png;
  availableSize = [72, 96, 128, 144, 152, 192, 384, 512];
  selectedSizes: boolean[];

  isSettingsVisible = false;
  private showSettingsSubject = new BehaviorSubject(this.isSettingsVisible);
  showSettings$ = this.showSettingsSubject.asObservable();
  constructor() {}

  ngOnInit(): void {
    this.selectedSizes = new Array(this.availableSize.length).fill(true);
  }

  toggleSettings() {
    this.isSettingsVisible = !this.isSettingsVisible;
    this.settingsApplied.emit(this.isSettingsVisible);
    this.showSettingsSubject.next(this.isSettingsVisible);
  }

  updateSettings() {
    const selectedSizes = this.selectedSizes.map((isSelected: boolean, i: number) => {
      if (isSelected) return this.availableSize[i];
      return undefined;
    });
    const selectedSettings: PWAAdvancesSettingsEvent = {
      format: this.selectedFormat,
      sizes: selectedSizes.filter(Boolean) as SupportedSizes[],
    };
    this.settingsChanged.emit(selectedSettings);
  }
}
