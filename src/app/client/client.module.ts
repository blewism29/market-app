/*
 * @Author: Benjamin Lewis 
 * @Date: 2019-06-03 14:32:50 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2019-06-03 21:28:49
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared';
import { HomeComponent } from './components';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
  ]
})

export class ClientModule { }
