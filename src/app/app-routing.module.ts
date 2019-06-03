/*
 * @Author: Benjamin Lewis 
 * @Date: 2019-06-03 14:03:20 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2019-06-03 14:35:27
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
/*   { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home',
    loadChildren: 'app/client/client.module#ClientModule',
    data: {
      footer: {
        disabled: true
      }
    }
  },
  { path: '**', redirectTo: '/login' } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
