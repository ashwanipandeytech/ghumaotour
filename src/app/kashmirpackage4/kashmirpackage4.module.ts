import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Kashmirpackage4RoutingModule } from './kashmirpackage4-routing.module';
import { PackageComponent } from './package.component';


@NgModule({
  declarations: [
    PackageComponent
  ],
  imports: [
    CommonModule,
    Kashmirpackage4RoutingModule
  ]
})
export class Kashmirpackage4Module { }
