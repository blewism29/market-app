/*
 * @Author: Benjamin Lewis 
 * @Date: 2019-06-03 14:03:15 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2019-06-03 14:04:43
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
