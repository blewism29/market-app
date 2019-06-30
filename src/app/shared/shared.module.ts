/*
 * @Author: Benjamin Lewis 
 * @Date: 2019-06-03 14:13:14 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2019-06-03 21:29:03
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [ NavComponent ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [ NavComponent ]
})

export class SharedModule { }
