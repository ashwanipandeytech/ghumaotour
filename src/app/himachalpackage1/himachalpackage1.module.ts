import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Himachalpackage1RoutingModule } from './himachalpackage-routing.module';
import { PackageComponent } from './package.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PackageComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    Himachalpackage1RoutingModule,
    SharedModule
  ]
})
export class Himachalpackage1Module { }
