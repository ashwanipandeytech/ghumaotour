import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Rajasthanpackage3RoutingModule } from './rajasthanpackage3-routing.module';
import { PackageComponent } from './package.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    PackageComponent
  ],
  imports: [
    CommonModule,
    Rajasthanpackage3RoutingModule,
    SlickCarouselModule
  ]
})
export class Rajasthanpackage3Module { }
