import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-packageenquiry',
  templateUrl: './packageenquiry.component.html',
  styleUrls: ['./packageenquiry.component.scss']
})
export class PackageenquiryComponent implements OnInit {
  inquiryform:any;
  inquiryData:any;

  constructor(private dataservice:DataService,public toastr: ToastrService) { }

  ngOnInit(): void {
    this.inquiryData={
      fullName:'',
      phone:'',
      email:'',
      destination:'',
      noOfTravellers:'',
      travellingMonth:''


    }
  }


  submitinquiryform(Rform:any){
    this.inquiryform = Rform.form;
    if (this.inquiryform.invalid) {
       return;
    }

    this.dataservice.callApi(this.inquiryData, 'sendemail.php').subscribe((res: any) => {
console.info(res,'enquiry')
      this.toastr.success('Thank!,We have received your Inquiry.');
    })



  }
}
