import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Kashmirpackage2RoutingModule } from './kashmirpackage2-routing.module';
import { PackageComponent } from './package.component';


@NgModule({
  declarations: [
    PackageComponent
  ],
  imports: [
    CommonModule,
    Kashmirpackage2RoutingModule
  ]
})
export class Kashmirpackage2Module { }
