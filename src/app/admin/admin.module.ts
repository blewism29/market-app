/*
 * @Author: Benjamin Lewis 
 * @Date: 2019-06-03 14:28:54 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2019-06-03 14:32:26
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})

export class AdminModule { }
