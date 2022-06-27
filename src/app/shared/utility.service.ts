import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor( private router:Router) {

  }

  scrollToComponent(id: string) {


    let el = document.getElementById(id);
    if (el == null) {


    } else {
      setTimeout(() => {
        let el = document.getElementById(id);
        if (el != null) {

          console.info(this.router.url)
          let  topOfElement
          if(this.router.url=='' || this.router.url=='/'){
            topOfElement = el.offsetTop -84;
          }else{
              topOfElement = el.offsetTop+25;
          }
          // topOfElement = el.offsetTop+25;
           window.scroll({
               top: topOfElement,
               behavior: "smooth"
           });
          // el.scrollIntoView({
          //   behavior: 'smooth',
          //   block: 'start',
          //   inline: 'start',

          // });
        }

      }, 10);

    }



  }
}
