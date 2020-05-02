/*
 * File: dashboard.component.ts
 * Project: webitto-frontend
 * File Created: Friday, 1st May 2020 2:24:14 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 2nd May 2020 4:26:49 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(
      '%c😉 You are a curios one, I Like you.',
      'font-size: 10px;padding:6px;background-color:#3986FD;border-radius:4px;color: #fff',
    );
    console.log(
      '%c🧑‍💻 Find the code at https://github.com/adisreyaj/webitto-frontend.',
      'font-size: 10px;padding:6px;background-color:#3986FD;border-radius:4px;color:#fff',
    );
  }
}
