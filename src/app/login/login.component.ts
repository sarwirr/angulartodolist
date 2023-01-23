import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UsersService } from '../user.service';

@Component({ templateUrl: 'login.component.html', styleUrls: ['login.component.css']})

export class LoginComponent implements OnInit {  
    loginForm: FormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });  
    submitted = false;  
    returnUrl: string | undefined;  
    error: string | undefined;

    
    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private us:UsersService) {}
    
    ngOnInit() {
        this.loginForm = this.formBuilder.group({ 
            email: new FormControl("",[Validators.required]),
            password: new FormControl("",[Validators.required])
        });
        
        // reset login status    
        // this.us.logout();
        
        // get return url from route parameters or default to '/'    
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/todo';  
    }
    
    
    
    onSubmit() {
 
        if (this.loginForm.invalid) {
            console.log("invalid");    
        }
        
        this.us.login({ username: this.loginForm.get("email")?.value , password: this.loginForm.get("password")?.value})
            .pipe(first()).subscribe((data:any) => {
                this.error = '';
                // console.log (data);
                localStorage.setItem('token', data.access_token );

                this.router.navigate([this.returnUrl]);
            }, error => {
                this.error = error;

            });
    }
}
