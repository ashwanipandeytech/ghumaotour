import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Rajasthanpackage5RoutingModule } from './rajasthanpackage5-routing.module';
import { PackageComponent } from './package.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    PackageComponent
  ],
  imports: [
    CommonModule,
    Rajasthanpackage5RoutingModule,
    SlickCarouselModule
  ]
})
export class Rajasthanpackage5Module { }
