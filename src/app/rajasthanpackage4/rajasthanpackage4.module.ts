import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Rajasthanpackage4RoutingModule } from './rajasthanpackage4-routing.module';
import { PackageComponent } from './package.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    PackageComponent
  ],
  imports: [
    CommonModule,
    Rajasthanpackage4RoutingModule,
    SlickCarouselModule
  ]
})
export class Rajasthanpackage4Module { }
