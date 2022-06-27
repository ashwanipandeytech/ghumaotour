import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Rajasthanpackage7RoutingModule } from './rajasthanpackage7-routing.module';
import { PackageComponent } from './package.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    PackageComponent
  ],
  imports: [
    CommonModule,
    Rajasthanpackage7RoutingModule,
    SlickCarouselModule
  ]
})
export class Rajasthanpackage7Module { }
