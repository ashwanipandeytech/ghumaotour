import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Kashmirpackage5RoutingModule } from './kashmirpackage5-routing.module';
import { PackageComponent } from './package.component';


@NgModule({
  declarations: [
    PackageComponent
  ],
  imports: [
    CommonModule,
    Kashmirpackage5RoutingModule
  ]
})
export class Kashmirpackage5Module { }
