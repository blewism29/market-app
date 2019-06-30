/*
 * @Author: Benjamin Lewis 
 * @Date: 2019-06-03 14:03:20 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2019-06-03 19:46:33
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home',
    loadChildren: './client/client.module#ClientModule',
    data: { }
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
