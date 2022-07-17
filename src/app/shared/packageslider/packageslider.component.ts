import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-packageslider',
  templateUrl: './packageslider.component.html',
  styleUrls: ['./packageslider.component.scss']
})
export class PackagesliderComponent implements OnInit {
  @Input()
  configType: string;

  @Input()
  packageType: string;

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
  packageData: any;
  imageSliderImageSrc: string;
  constructor(public utilityservice:UtilityService,private apiService:ApiService) {
   // console.info(this.fromPage)
  }


  ngOnInit(): void {
    if(this.configType=='full'){
      this.sliderconfig=this.slideConfig
    }else{
      this.sliderconfig=this.slideConfigPackage
    }

let requestPayload;
if(this.packageType=='Popular'){
  requestPayload={
    Type:[
      {
        id:"0",
        label:'Popular'
      }
    ]
  }

}
else if(this.packageType=='Honeymoon'){
console.info('here')
requestPayload={
  Type:[
    {
      id:"4",
      label:'Honeymoon Special'
    }
  ]
}
}

this.apiService.callApiWithBearer(requestPayload, 'package').subscribe((response:any) => {

  //   this.packageData=response.data;
     //let resSTR = JSON.parse(response.data);
     this.packageData=response.data;
    //  this.packageData.Programs=JSON.parse(response.data.Programs)
    //  this.packageData.Inclusions=JSON.parse(response.data.Inclusions)
    //  this.packageData.Exclusions=JSON.parse(response.data.Exclusions)
    //  this.packageData.Terms=JSON.parse(response.data.Terms)
    // this.packageData.Type=JSON.parse(response.data.Type)

    // this.packageData.Cancellation=JSON.parse(response.data.Cancellation)

     this.packageData.IsActive = (this.packageData.IsActive == 'Yes') ? true : false;

     this.packageData.map((item:any)=>{
      item.src= environment.PACKAGE_FOLDER+item.SliderImage+"?v="+Math.random();
      console.info(item.src)
     })

     // this.imgs = response['Images'];


       // this.strtDate = new Date(response.StartDate);
       // this.editPackageForm.patchValue(response);
   });

  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }
}
