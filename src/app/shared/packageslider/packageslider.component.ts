import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-packageslider',
  templateUrl: './packageslider.component.html',
  styleUrls: ['./packageslider.component.scss']
})
export class PackagesliderComponent implements OnInit {
  @Input()
  configType: string;

    slideConfig={
      dots: false,
      infinite: true,
      autoplay: true,
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

  slideConfigPackage = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 2500,
    slidesToShow: 2,
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
  sliderconfig: any;
  constructor(public utilityservice:UtilityService) {
   // console.info(this.fromPage)
  }


  ngOnInit(): void {
    if(this.configType=='full'){
      this.sliderconfig=this.slideConfig
    }else{
      this.sliderconfig=this.slideConfigPackage
    }
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }
}
