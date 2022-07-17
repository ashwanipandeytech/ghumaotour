import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { UtilityService } from 'src/app/shared/utility.service';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  inquiryform: any = {};
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    speed: 1200, fade: true,
    adaptiveHeight: false
  };
  slideConfigPackage={
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: false,
    respondTo: 'slider',
    adaptiveHeight: true,
    'responsive': [
      {
        'breakpoint': 767,
         'settings': {
          'slidesToShow': 1
                }
              }
            ]



  }
  slideConfigTestimonial = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 2000
  };
  bannerHeight:any;
  inquiryData:any;
  constructor(private dataservice:DataService ,public utilityservice:UtilityService,public toastr: ToastrService) { }

  ngOnInit(): void {
    this.inquiryData={
      fullName:'',
      phone:'',
      email:'',
      destination:'',
      noOfTravellers:'',
      travellingMonth:''


    }
    this.bannerHeight=820;
    if ($(window).width() < 576) {
      this.bannerHeight=680;
    }
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
   // console.log('afterChange');
  }

  beforeChange(e: any) {
   // console.log('beforeChange');
  }
  submitinquiryform(Rform:any){
    this.inquiryform = Rform.form;
    if (this.inquiryform.invalid) {
       return;
    }

    this.dataservice.callApi(this.inquiryData, 'sendemail.php').subscribe((res: any) => {

      this.toastr.success('Thank!,We have received your Inquiry.');

    })





  }

}
