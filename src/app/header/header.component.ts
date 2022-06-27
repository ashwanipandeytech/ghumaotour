import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UtilityService } from '../shared/utility.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor( private router: Router,public utilityservice:UtilityService) { }

  ngOnInit(): void {
  }

  goToPage(url: any,reload=false) {
    this.router.navigateByUrl(url)
    this.router.navigate([url]).then(result => {

      });
  }
}
