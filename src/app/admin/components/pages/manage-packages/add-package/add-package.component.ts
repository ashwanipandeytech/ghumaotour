import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin/services/admin.service';
import { Category } from 'src/app/models/category.model';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styles: [
  ]
})
export class AddPackageComponent implements OnInit {
  uploadImage: Boolean;
  categories: Category[];
  CategoryIdDefaultValue: Number;
  imageUploadForm: FormGroup;
  imageUploadInnerForm: FormGroup
  imageUploadSliderForm: FormGroup
  imageSrc: any;

  addPackageForm: FormGroup;

  error: Boolean;
  errorMessage: String;
  packageData: any;
  packageType: any
  imageInnerSrc: string | ArrayBuffer;
  imageSliderImageSrc: string | ArrayBuffer;
  packages: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private adminApiService: AdminService, private router: Router) { }

  ngOnInit(): void {
    // this.initAddPackageForm();
    this.intiImageUploadForm();
    this.error = false;
    this.uploadImage = true;

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm,dd;
     mm = today.getMonth() + 1; // Months start at 0!
     dd = today.getDate();

    if (dd < 10) { dd = '0' + dd; }
    if (mm < 10) { mm = '0' + mm; }

    const formattedToday = yyyy+'-'+mm+'-'+dd;


    this.packageData = {
      Code: '',
      Title: '',
      PackageName: '',
      PackageSlug: '',
      StartDate: formattedToday,
      CategoryId: 0,
      Price: 0,
      NoOfDays: 0,
      NumberOfPerson: 0,
      Priority: '',
      IsActive: false,
      isMenu:false,
      Note:'',
      Programs: [
        {
          "Day": 1,
          "Title": '',
          "Description": ''
        }
      ],
      Inclusions: [
        {
          "text": '',
        }
      ],
      Exclusions: [
        {
          "text": '',
        }
      ],

      Terms: [
        {
          "text": '',
        }
      ],
      Cancellation: [{
        "Days": '',
        "Charges": '',
        "AppliedOn": ""
      }],

      ShortDescription: '',
      Description: '',
      Type: [],
      Image: ''
    };

    this.apiService.callApiWithBearer('', 'category').subscribe((response: any) => {
      if (response.success && response.data && response.data != '') {
        this.categories = response.data;
        let slug = this.route.snapshot.paramMap.get('_id');

        let categoryId;
        if (this.route.snapshot.paramMap.get('_id') && this.categories.findIndex((item: any) => item.CategoryId == slug) > -1) {
          categoryId = Number(slug)


        } else {
          categoryId = 0
        }
        console.info(categoryId)
        this.packageData.CategoryId = categoryId
        this.initAddPackageForm(categoryId);
      } else {
        this.categories = [];
      }

    });

    this.apiService.callApiWithBearer('', 'package').subscribe((response: any) => {
      if (response.success && response.data && response.data != '') {
        this.packages = response.data;
      } else {
        this.packages = []
      }

    });
  }



  intiImageUploadForm() {
    this.imageUploadForm = new FormGroup({
      Image: new FormControl('', [Validators.required]),
      FileSource: new FormControl('')
    });


    this.imageUploadInnerForm = new FormGroup({
      InnerImage: new FormControl('', [Validators.required]),
      FileSource: new FormControl('')
    });

    this.imageUploadSliderForm = new FormGroup({
      SliderImage: new FormControl('', [Validators.required]),
      FileSource: new FormControl('')
    });
  }

  initAddPackageForm(categoryId) {
    this.addPackageForm = new FormGroup({
      Code: new FormControl('', [Validators.required, Validators.minLength(6)]),
      Title: new FormControl('', [Validators.required, Validators.minLength(6)]),
      PackageSlug: new FormControl('', [Validators.required, Validators.minLength(6)]),
      StartDate: new FormControl('', [Validators.required]),
      CategoryId: new FormControl('', [Validators.required, Validators.pattern(/[1-9]/)]),
      Price: new FormControl('', [Validators.required]),
      NoOfDays: new FormControl('', [Validators.required]),
      Inclusions: new FormControl('', [Validators.required, Validators.minLength(2)]),
      Exclusions: new FormControl('', [Validators.required, Validators.minLength(2)]),
      Extensions: new FormControl('', [Validators.required, Validators.minLength(2)]),
      Executed: new FormControl('', [Validators.required, Validators.minLength(2)]),
      Description: new FormControl('', [Validators.required]),
      Type: new FormControl('', [Validators.required, Validators.pattern(/[1-9]/)]),
      Image: new FormControl('')
    });




    this.packageType = [{
      id: '0',
      label: 'Popular'
    },
    {
      id: '1',
      label: 'Domestic'
    },
    {
      id: '2',
      label: 'International'
    },
    {
      id: '3',
      label: 'Pilgrimage'
    },
    {
      id: '4',
      label: 'Honeymoon Special'
    },
    {
      id: '5',
      label: 'Special Offer'
    },
    {
      id: '6',
      label: 'Top Notch '
    },
    {
      id:'7',
      label:'Other'
    },

    ]

  }
  checkboxAction(event, data) {
    if (event.target.checked) {
      if (this.packageData.Type.findIndex((item: any) => item.id == data.id) < 0) {
        this.packageData.Type.push(data);
      }
    } else {
      this.packageData.Type.splice(this.packageData.Type.indexOf(data.id), 1)
    }
    console.info(this.packageData.Type)
  }
  addMore(type) {
    if (type == 'program') {
      this.packageData.Programs.push({
        "Day": this.packageData.Programs.length + 1,
        "Title": '',
        "Description": ''
      })
    }
    else if (type == 'Inclusions') {
      this.packageData.Inclusions.push({
        "text": '',
      })

    }
    else if (type == 'Exclusions') {
      this.packageData.Exclusions.push({
        "text": '',
      })

    } else if (type == 'Cancellation') {
      this.packageData.Cancellation.push({
        "Days": '',
        "Charges": '',
        "AppliedOn": ""
      })
    }
    else if (type == 'Terms') {
      this.packageData.Terms.push({
        "text": '',
      })
    }

  }
  remove(type,index) {
    if (type == 'program') {
      this.packageData.Programs.splice(index,1)
    }
    else if (type == 'Inclusions') {
      this.packageData.Inclusions.splice(index,1)
    }
    else if (type == 'Exclusions') {
      this.packageData.Exclusions.splice(index,1)

    } else if (type == 'Cancellation') {
      this.packageData.Cancellation.splice(index,1)
    }
    else if (type == 'Terms') {
      this.packageData.Terms.splice(index,1)
    }

  }

  addPackageAction() {



    const NoOfDays = Number(this.packageData.NoOfDays);
    const NumberOfPerson = Number(this.packageData.NumberOfPerson);
    const price = Number(this.packageData.Price);

    console.info(Number.isInteger(NumberOfPerson), Number(NumberOfPerson) < 0, NumberOfPerson)


    if (this.packageData.Code == '') {
      this.error = true;
      this.errorMessage = 'Please Enter Package Code';
      console.info('here')
      return false;
    }
    else if (this.packageData.Code != '' && this.packages != '' && this.packages.findIndex((item: any) => item.Code == this.packageData.Code) > -1) {
      this.errorMessage = 'Package Code Already Exist';
      this.error = true;
      return false;;
    }

    if (this.packageData.PackageName == '') {
      this.errorMessage = 'Please Enter Package Name';
      this.error = true;
      return false;;
    }
    else if (this.packageData.PackageName != '' && this.packages != '' && this.packages.findIndex((item: any) => item.PackageName == this.packageData.PackageName) > -1) {
      this.errorMessage = 'Package Name Code Already Exist';
      this.error = true;
      return false;;
    }

    else if (this.packageData.PackageSlug == '') {
      this.errorMessage = 'Please Enter Package Slug';
      this.error = true;
      return false;;
    }
    else if (this.packageData.PackageSlug != '' && this.packages != '' && this.packages.findIndex((item: any) => item.Code == this.packageData.PackageSlug) > -1) {
      this.errorMessage = 'Package Code Already Exist';
      this.error = true;
      return false;;
    }

    else if (this.packageData.Title == '') {
      this.errorMessage = 'Please Enter Package Title';
      this.error = true;
      return false;;
    }
    else if (this.packageData.Title != '' && this.packages != '' && this.packages.findIndex((item: any) => item.Title == this.packageData.Title) > -1) {
      this.errorMessage = 'Package Title Already Exist';
      this.error = true;
      return false;;
    }

    else if (this.packageData.CategoryId ==0) {
      this.errorMessage = 'Package Select Category';
      this.error = true;
      return false;;
    }

    else if (this.packageData.Type == '') {
      this.errorMessage = 'Package Select Package Type';
      this.error = true;
      return false;;
    }


    else if (this.packageData.ShortDescription == '') {
      this.errorMessage = 'Please Enter Short Description ';
      this.error = true;
      return false;
    }

    else if (this.packageData.Description == '') {
      this.errorMessage = 'Please Enter Long Description ';
      this.error = true;
      return false;
    }

    else if (Number.isInteger(NumberOfPerson) && Number(NumberOfPerson) < 0 || isNaN(NumberOfPerson)) {

      this.errorMessage = 'Please Enter Valid No. Of Person ';
      this.error = true;
      return false;
    }

    else if (Number.isInteger(price) && Number(price) < 0 || isNaN(NumberOfPerson)) {

      this.errorMessage = 'Please Enter Valid Price ';
      this.error = true;
      return false;
    }

    else if (Number.isInteger(NoOfDays) && Number(NoOfDays) < 0 || isNaN(NumberOfPerson)) {
      this.errorMessage = 'Please Enter Valid No. Of Days ';
      this.error = true;
      return false;
    }
    this.addPackage(); return false;

  }



  addPackage() {






    let data = JSON.parse(JSON.stringify(this.packageData));
    data.IsActive = (data.IsActive == true) ? 'Yes' : 'No';
    data.isMenu = (data.isMenu == true) ? 'Yes' : 'No';

    delete data.image;
    delete data.Image;
    delete data.InnerImage;
    delete data.SliderImage;



    this.apiService.callApiWithBearer(data, 'package/add'
    ).subscribe(
      (result: any) => {
        //console.log(result);
        if (result.success) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Package Created!',
            showConfirmButton: false,
            timer: 1500
          });

          if (this.uploadImage) {
            this.packageData.PackageId = result.data.PackageId;
            console.info(result.data);//return false
            this.imageUpload()
          }

        }
        this.error = false;
      },
      error => {
        this.error = true;
        this.errorMessage = error.error;
      }
    );
  }

  resetError() {
    this.error = false;
    this.errorMessage = '';
  }

  imageUpload() {
    // Get Stored token
    let token = localStorage.getItem('token');

    // if (this.imageUploadForm.valid) {
    var formData = new FormData();
    formData.append('PackageId', this.packageData.PackageId);
    formData.append('Code', this.packageData.Code);
    formData.append('Image', this.imageUploadForm.get('FileSource').value);
    formData.append('InnerImage', this.imageUploadInnerForm.get('FileSource').value);
    formData.append('SliderImage', this.imageUploadSliderForm.get('FileSource').value);

    this.apiService.callApiWithBearer(formData, 'package/upload').subscribe(
      (result: any) => {
        if (result.success) {
          setTimeout(() => {
            this.router.navigate(['/admin/packages']);
          }, 1800);



        }



      },
      error => {
        this.error = true;
        this.errorMessage = error.error;
      }
    );
    // } else {
    //   this.imageUploadForm.markAsTouched();
    //   this.error = true;
    //   this.errorMessage = 'Image not selected! Please select the image.';
    // }
  }

  onFileChange(event, type) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      if (type == 'homeBanner') {
        this.imageUploadForm.patchValue({
          FileSource: file
        });
        this.packageData.image = file;
        reader.onload = e => this.imageSrc = reader.result;
        reader.readAsDataURL(file);
      } else if (type == 'InnerImage') {

        this.imageUploadInnerForm.patchValue({
          FileSource: file
        });
        this.packageData.InnerImage = file;

        reader.onload = e => this.imageInnerSrc = reader.result;
        reader.readAsDataURL(file);
      }

      else if (type == 'SliderImage') {

        this.imageUploadSliderForm.patchValue({
          FileSource: file
        });
        this.packageData.SliderImage = file;

        reader.onload = e => this.imageSliderImageSrc = reader.result;
        reader.readAsDataURL(file);
      }






    }
  }

  enableDisableImageUploadAction() {
    if ($('#enableUpload').prop('checked')) {
      $('#uploadImageCard').show();
      $('#uploadUrlCard').hide();
      this.uploadImage = true;
    } else {
      $('#uploadImageCard').hide();
      $('#uploadUrlCard').show();
      this.uploadImage = false;
    }
  }
}
