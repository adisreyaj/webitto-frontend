/*
 * File: snackbar.component.ts
 * Project: webitto-frontend
 * File Created: Saturday, 2nd May 2020 4:37:11 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 2nd May 2020 4:47:50 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */


import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

  ngOnInit(): void {}
}
