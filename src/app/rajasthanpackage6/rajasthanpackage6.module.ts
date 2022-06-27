import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Rajasthanpackage6RoutingModule } from './rajasthanpackage6-routing.module';
import { PackageComponent } from './package.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    PackageComponent
  ],
  imports: [
    CommonModule,
    Rajasthanpackage6RoutingModule,
    SlickCarouselModule
  ]
})
export class Rajasthanpackage6Module { }
