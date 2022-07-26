import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any[];
  slug: any;
  data: any;
  imageSrc: string;
  imageInnerSrc: string;
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

  sticky: boolean = false;
  selector: any = [];
  stopScrollDetection: boolean;
  initTopPosition: any;
  CategoryData: any={};


  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    console.info('test', this.slug)
    this.loadcategories();
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.location.reload();
      }
    });
  }

   searchTree(element, slug){
    if(element.CategorySlug == slug){
     this.getCategoriesPackages(element)
         return element;
    }else if (element.children_recursive != null){
         var i;
         var result = null;
         for(i=0; result == null && i < element.children_recursive.length; i++){
              result = this.searchTree(element.children_recursive[i], slug);
         }
         return result;
    }
    return null;
}
  loadcategories() {
    this.apiService.callApiWithBearer('', 'category/list').subscribe((response: any) => {
      if (response.success && response.data && response.data != '') {
        this.categories = response.data;

        this.categories.map(item=>{
          this.searchTree(item, this.slug)
        })
      //  let index = response.data.findIndex(item => item.CategorySlug == this.slug);





        // if (index < 0) {
        //   console.info('package not found')

        // } else {


        //   let token = localStorage.getItem('token');
        //   let requestPayload = {
        //     PackageId: this.categories[index].PackageId
        //   }

        //   this.apiService.callApiWithBearer(requestPayload, 'package/details').subscribe((response: any) => {
        //     if (response.success) {

        //       this.data = response.data;
        //       this.data.Programs = JSON.parse(response.data.Programs)
        //       this.data.Inclusions = JSON.parse(response.data.Inclusions)
        //       this.data.Exclusions = JSON.parse(response.data.Exclusions)
        //       this.data.Terms = JSON.parse(response.data.Terms)
        //       this.data.Type = JSON.parse(response.data.Type)
        //       this.data.Cancellation = JSON.parse(response.data.Cancellation)
        //       this.imageSrc = environment.PACKAGE_FOLDER + response.data.Image + "?v=" + Math.random();
        //       this.imageInnerSrc = environment.PACKAGE_FOLDER + response.data.InnerImage + "?v=" + Math.random();
        //       console.info(this.data)

        //     } else {
        //       this.data = [];
        //     }
        //   });

        // }

      } else {

      }

    });
  }

  getCategoriesPackages(element){
    let requestPayload={
      CategoryId:element.CategoryId

    }

    this.apiService.callApiWithBearer(requestPayload,'category/details').subscribe((response:any) => {
       // this.editCategoryFrom.patchValue(response.data, this.imageSrc = response.data.Image);
if(response.success && response.data!=''){
  this.CategoryData=response.data;
  this.CategoryData.imageSrc = environment.CATEGORY_FOLDER+response.data.Image+"?v="+Math.random();
  this.CategoryData.Packages=[];

  this.apiService.callApiWithBearer(requestPayload, 'package').subscribe((response: any) => {
    if (response.success && response.data!='') {

    let data=response.data;
      data.map(item=>{
        item.Programs=JSON.parse(item.Programs);
        item.Inclusions=JSON.parse(item.Inclusions);
        item.Exclusions=JSON.parse(item.Exclusions);
        item.Terms=JSON.parse(item.Terms);
        item.Type=JSON.parse(item.Type);
        item.Cancellation=JSON.parse(item.Cancellation);

        item.imageSrc = environment.PACKAGE_FOLDER + item.Image + "?v=" + Math.random();
        item.imageInnerSrc = environment.PACKAGE_FOLDER + item.InnerImage + "?v=" + Math.random();
        item.SliderImageSrc = environment.PACKAGE_FOLDER + item.SliderImage + "?v=" + Math.random();


      })
      this.CategoryData.Packages = data;

      console.info(this.CategoryData)


      // this.data.Programs = JSON.parse(response.data.Programs)
      // this.data.Inclusions = JSON.parse(response.data.Inclusions)
      // this.data.Exclusions = JSON.parse(response.data.Exclusions)
      // this.data.Terms = JSON.parse(response.data.Terms)
      // this.data.Type = JSON.parse(response.data.Type)
      // this.data.Cancellation = JSON.parse(response.data.Cancellation)
      // this.imageSrc = environment.PACKAGE_FOLDER + response.data.Image + "?v=" + Math.random();
      // this.imageInnerSrc = environment.PACKAGE_FOLDER + response.data.InnerImage + "?v=" + Math.random();
      // console.info(this.data)

    } else {
      this.data = [];
    }
});

}


    });




  }

  ngAfterViewInit() {

    // // get an array of 'href' of each a tag
    // this.initTopPosition = $('#myTab').offset().top;
    // var navLink = $('.tab li a');
    // //console.log(navLink);
    // var aArray = [];
    // var selector;
    // for (var i = 0; i < navLink.length; i++) {
    //   //console.log(i);
    //   var aChild = navLink[i];
    //   var navArray = $(aChild).attr('href');
    //   //console.log(navArray);
    //   aArray.push(navArray);
    //   //console.log(aArray);
    //   selector = aArray.join(" , ");
    //   //console.log(selector);
    // }
    // console.log(selector);
    // this.selector = aArray;
  }
  @HostListener('window:scroll', ['$event'])
  handleScroll(value: any) {

    if (this.stopScrollDetection) {
      return false;
    }
    if ($(window).scrollTop() > this.initTopPosition) {
      $('#myTab').addClass('sticky')
    } else {
      $('#myTab').removeClass('sticky')
    }
    var scrollTop = $(window).scrollTop();
    this.selector.map((item: any) => {
      var top = $(item).position().top;
      if (scrollTop - top > 270) {

        var id = $(item).attr('id');
        $('.tab li a').removeClass('active');
        $('a[href="#' + id + '"]').addClass('active');
      }
    })

  }

  setActive(id: any) {
    console.info(id)
    this.selector.map((item: any) => {
      var idinner = $(item).attr('id');
      $('.tab li a').removeClass('active');
      $('a[href="#' + idinner + '"]').removeClass('active');
      // $('a[href="#' + id + '"]').addClass('active');

      if (item != id) {
        // $('a[href="#' + idinner + '"]').removeClass('active');
      } else {

        this.stopScrollDetection = true;
        setTimeout(() => {
          $('a[href="#' + id + '"]').addClass('active');
          let tabId = item.split('#')[1]
          let el = document.getElementById(tabId);
          if (el != null) {

            var topOfElement = el.offsetTop + 300;
            window.scroll({
              top: topOfElement,
              behavior: "smooth"
            });
            //  this.handleScroll(id)

          }

          this.stopScrollDetection = false;
        }, 100);



        // $(item).scrollIntoView({
        //   behavior: 'smooth',
        //   block: 'start',
        //   inline: 'start',

        // });
      }

      setTimeout(() => {
        this.selector.map((item: any) => {
          if (item != id) {
            $(item + '-tab').removeClass('active');
          } else {
            $(id + '-tab').addClass('active');
          }
          $('#myTab').addClass('sticky')
        })
      }, 500);


    })
  }


}
