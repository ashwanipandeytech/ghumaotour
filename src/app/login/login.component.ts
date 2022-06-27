import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']

})
export class LoginComponent implements OnInit {
    formGroup: FormGroup;
    bgImage = '/assets/images/bannerlogin.png';
    loginUserData = {};
    error:Boolean;
    errorMessage:String;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.initLoginForm();
        this.error = false;
    }

    initLoginForm(){
        this.formGroup = new FormGroup({
            EmailId: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
            Password: new FormControl('', [Validators.required, Validators.minLength(4)])
        });
    }

    loginAction(){
        // if(this.formGroup.valid){
        //     this.authService.loginUser(this.formGroup.value).subscribe(
        //         result => {
        //             // Store User ID
        //             localStorage.setItem('userID', result.UserId);
        //             // Store User Role
        //             localStorage.setItem('roleID', result.RoleId);
        //             // Store Name
        //             localStorage.setItem('name', result.Name);
        //             // Store Email EmailId
        //             localStorage.setItem('email', result.EmailId);
        //             // Store MobileNo
        //             localStorage.setItem('mobile', result.MobileNo);
        //             // Store token
        //             localStorage.setItem('token', result.token);

        //             this.router.navigate(['/c']);
        //         },
        //         error => {
        //             this.error = true;
        //             this.errorMessage = error.error;
        //         }
        //     );
        // }
    }
}
