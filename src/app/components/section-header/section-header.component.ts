/*
 * File: section-header.component.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 9:02:29 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 1st May 2020 9:03:36 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent implements OnInit {
  @Input() data: { title: string; subtitle: string };

  constructor() {}

  ngOnInit(): void {}
}
