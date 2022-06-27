import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Kashmirpackage3RoutingModule } from './kashmirpackage3-routing.module';
import { PackageComponent } from './package.component';


@NgModule({
  declarations: [
    PackageComponent
  ],
  imports: [
    CommonModule,
    Kashmirpackage3RoutingModule
  ]
})
export class Kashmirpackage3Module { }
