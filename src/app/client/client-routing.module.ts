/*
 * @Author: Benjamin Lewis 
 * @Date: 2019-06-03 14:31:28 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2019-06-03 19:40:27
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: { }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class ClientRoutingModule { }
