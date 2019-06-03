/*
 * @Author: Benjamin Lewis 
 * @Date: 2019-06-03 14:31:28 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2019-06-03 14:32:44
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})

export class ClientRoutingModule { }
