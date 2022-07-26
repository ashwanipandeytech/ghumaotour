import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { UtilityService } from '../shared/utility.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  MenuList: any;
  slug: string;


  constructor(private route: ActivatedRoute, private router: Router,public utilityservice:UtilityService,private apiService:ApiService) { }

  ngOnInit(): void {
    let slug = this.router.url.split('/');
    if(slug && slug[2]){
      this.slug=slug[2]
    }
    console.info(slug[2])
    this.apiService.callApiWithBearer('', 'category/list',true).subscribe((res: any) => {
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
