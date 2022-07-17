import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/services/api.service';
import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styles: [
  ]
})
export class AddCategoriesComponent implements OnInit {
    uploadImage: Boolean;
    imageUploadForm: FormGroup;
    imageSrc: any;

    addCategoryFrom: FormGroup;
    keysOptions: Array<any> =[
        {name: "New", value: 'New'},
        {name: 'Popular', value: 'Popular'},
        {name: "Special", value: 'Special'},
        {name: "Domestic", value: 'Domestic'},
        {name: "Pilgrimage", value: 'Pilgrimage'},
        {name: "International", value: 'International'},
        {name: "Fixed-Departure", value: 'Fixed-Departure'}
    ];

    error:Boolean;
    errorMessage:String;

    constructor(private adminApiService: AdminService,private apiService:ApiService, private router: Router) {}

    ngOnInit(): void {
        this.initAddCategoryForm();
        this.intiImageUploadForm();
        this.error = false;
        this.uploadImage = false;
    }

    intiImageUploadForm() {
        this.imageUploadForm = new FormGroup({
            Image: new FormControl(''),
            FileSource: new FormControl('')
        });
    }

    initAddCategoryForm(){
        this.addCategoryFrom = new FormGroup({
            CategoryName: new FormControl('', [Validators.required, Validators.minLength(6)]),
            Description: new FormControl(''),
            isMenu:new FormControl(false),
            IsActive:new FormControl(false),
          //  StartingPrice:new FormControl(0),
            Image: new FormControl('')
        });
    }

    addCategoryAction(){
      console.info(this.addCategoryFrom.valid)
        if (this.addCategoryFrom.valid) {
          // this.imageUpload()
          this.addCategory();
            // if(this.uploadImage) {
            //     this.imageUpload()
            // }
            // else {
            //     this.addCategoryFrom.patchValue({
            //         Image: $('#ImageUrl').val().toString()
            //     });

            //     this.addCategory();
            // }
        } else {
            this.addCategoryFrom.markAsTouched();
            this.error = true;
            this.errorMessage = 'Form Validation Error';
        }
    }

    addCategory(){



        var formData = new FormData();
        formData.append('CategoryName', this.addCategoryFrom.get('CategoryName').value);
        formData.append('Description', this.addCategoryFrom.get('Description').value);
        formData.append('IsActive', (this.addCategoryFrom.get('IsActive').value)?'Yes':'No');
        formData.append('isMenu', (this.addCategoryFrom.get('isMenu').value)?'Yes':'No');
        formData.append('CreatedBy', '0');
        formData.append('StartingPrice', '0');
        //formData.append('Image', '0');
        if(this.uploadImage && this.imageUploadForm.get('FileSource').value && this.imageUploadForm.get('FileSource').value!=''){
          formData.append('Image', this.imageUploadForm.get('FileSource').value);
        }




     //   console.info(formData);return false

        this.apiService.callApiWithBearer(formData, 'category/add').subscribe(
            (result:any) => {
                //console.log(result);
                if(result.success){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Category Created!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setTimeout(() => {
                        this.router.navigate(['/admin/categories']);
                    }, 1800);
                }
                this.error = false;
            },
            error => {
                this.error = true;
                this.errorMessage = error.error;
            }
        );
    }

    resetError(){
        this.error = false;
        this.errorMessage = '';
    }

    imageUpload() {
        // Get Stored token
        let token = localStorage.getItem('token');
       // return false;

        if (this.imageUploadForm.valid) {
            var formData = new FormData();
            formData.append('Image', this.imageUploadForm.get('FileSource').value);
            console.info(formData);return false

            this.adminApiService.uploadImage(formData, token).subscribe(
                result => {
                    if (result.type === HttpEventType.Response) {
                        this.addCategoryFrom.patchValue({
                            Image: result.body.toString()
                        });

                        this.addCategory();
                    }

                    if (result.type === HttpEventType.UploadProgress) {
                        const percentDone = Math.round(100 * result.loaded / result.total);
                        //console.log('Progress ' + percentDone + '%');
                    }
                },
                error => {
                    this.error = true;
                    this.errorMessage = error.error;
                }
            );
        } else {
            this.imageUploadForm.markAsTouched();
            this.error = true;
            this.errorMessage = 'Image not selected! Please select the image.';
        }
    }

    onFileChange(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];

            this.imageUploadForm.patchValue({
                FileSource: file
            });

            const reader = new FileReader();
            reader.onload = e => this.imageSrc = reader.result;
            reader.readAsDataURL(file);
        }
    }

    checkboxAction(event,type){
      console.info(this.addCategoryFrom)

      if(type=='isMenu'){


      }
      else if(type=='IsActive'){

      }
        // const formArray: FormArray = this.addCategoryFrom.get('Keys') as FormArray;

        // /* Selected */
        // if(event.target.checked){
        //     // Add a new control in the arrayForm
        //     formArray.push(new FormControl(event.target.value));
        // }
        // /* unselected */
        // else{
        //     // find the unselected element
        //     let i: number = 0;

        //     formArray.controls.forEach((ctrl: FormControl) => {
        //         if(ctrl.value == event.target.value) {
        //             formArray.removeAt(i);
        //             return;
        //         }

        //         i++;
        //     });
        // }
    }

    enableDisableImageUploadAction(){
        if($('#enableUpload').prop('checked')){
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
