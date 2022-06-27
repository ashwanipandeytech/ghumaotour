import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Kashmirpackage1RoutingModule } from './kashmirpackage1-routing.module';
import { PackageComponent } from './package.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PackageComponent
  ],
  imports: [
    CommonModule,
    Kashmirpackage1RoutingModule,
    SharedModule
  ]
})
export class Kashmirpackage1Module { }
