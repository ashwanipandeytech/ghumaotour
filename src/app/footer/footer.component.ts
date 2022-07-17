import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  popularpackages: any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.popularpackages=[]
    let requestPayload={
      Type:[
        {
          id:"0",
          label:'Popular'
        }
      ]
    }
    this.apiService.callApiWithBearer(requestPayload, 'package').subscribe((response:any) => {

     if(response.success &&response.data!=''){
      this.popularpackages=response.data;

      const res = [];
     let  chunkSize=2;
      for (let i = 0; i <  this.popularpackages.length; i += chunkSize) {
          const chunk =  this.popularpackages.slice(i, i + chunkSize);
          res.push(chunk);
      }
      this.popularpackages=res
      console.info(this.popularpackages)


     }else{
       this.popularpackages=[]
     }



         // this.imgs = response['Images'];


           // this.strtDate = new Date(response.StartDate);
           // this.editPackageForm.patchValue(response);
       });
  }

}
