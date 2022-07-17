import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { UtilityService } from '../shared/utility.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  MenuList: any;


  constructor( private router: Router,public utilityservice:UtilityService,private apiService:ApiService) { }

  ngOnInit(): void {

    this.apiService.callApiWithBearer('', 'category').subscribe((res: any) => {
      if(res.success && res.data!=''){
        this.MenuList=res.data
      }else{
        this.MenuList=[]
      }



     })
  }

  goToPage(url: any,reload=false) {
    this.router.navigateByUrl(url)
    this.router.navigate([url]).then(result => {

      });
  }
}
