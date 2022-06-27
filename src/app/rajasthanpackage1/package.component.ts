import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PackageComponent implements OnInit {
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
  constructor() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);


  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {

    // get an array of 'href' of each a tag
    this.initTopPosition = $('#myTab').offset().top;
    var navLink = $('.tab li a');
    //console.log(navLink);
    var aArray = [];
    var selector;
    for (var i = 0; i < navLink.length; i++) {
      //console.log(i);
      var aChild = navLink[i];
      var navArray = $(aChild).attr('href');
      //console.log(navArray);
      aArray.push(navArray);
      //console.log(aArray);
      selector = aArray.join(" , ");
      //console.log(selector);
    }
    console.log(selector);
    this.selector = aArray;
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
          if(item!=id){
            $(item+'-tab').removeClass('active');
          }else{
            $(id+'-tab').addClass('active');
          }
          $('#myTab').addClass('sticky')
        })
      }, 500);


    })
  }
}
