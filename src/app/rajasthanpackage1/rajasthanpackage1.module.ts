import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Rajasthanpackage1RoutingModule } from './rajasthanpackage1-routing.module';
import { PackageComponent } from './package.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    PackageComponent
  ],
  imports: [
    CommonModule,
    Rajasthanpackage1RoutingModule,
    SlickCarouselModule,

  ]
})
export class Rajasthanpackage1Module { }
