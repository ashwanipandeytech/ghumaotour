import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageenquiryComponent } from './packageenquiry/packageenquiry.component';
import { PackagesliderComponent } from './packageslider/packageslider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import {HttpClientModule} from '@angular/common/http'; // add this line
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    PackageenquiryComponent,
    PackagesliderComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    FormsModule,
    HttpClientModule,

    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
  ],
  exports: [
    PackageenquiryComponent,
    PackagesliderComponent,
    TestimonialComponent,
    SlickCarouselModule,
    FormsModule,
    HttpClientModule,
    ToastrModule,
    CommonModule
  ],
    providers: [
    DataService,
    {provide: ToastrService, useClass: ToastrService}
  ]
})
export class SharedModule { }
