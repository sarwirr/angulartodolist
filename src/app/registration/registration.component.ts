import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UsersService } from '../user.service';

@Component({ templateUrl: 'registration.component.html', styleUrls: ['registration.component.css']})

export class RegistrationComponent implements OnInit {  
  RegistrationForm: FormGroup = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl('')
    });  
    submitted = false;  
    returnUrl: string | undefined;  
    error: string | undefined;

    
    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private us:UsersService) {}
    
    ngOnInit() {
        this.RegistrationForm = this.formBuilder.group({ 
            name:  new FormControl("",[Validators.required]),
            email: new FormControl("",[Validators.required]),
            password: new FormControl("",[Validators.required])
        });
        
        // reset login status    
        // this.us.logout();
        
        // get return url from route parameters or default to '/'    
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';  
    }
    
    
    
    onSubmit() {
        
        
        if (this.RegistrationForm.invalid) {
          // write a code to show error message

            return;    
        }
        
        this.us.register({ name: this.RegistrationForm.get("name")?.value ,email: this.RegistrationForm.get("email")?.value , password: this.RegistrationForm.get("password")?.value})
            .subscribe(data => {
                this.error = '';
                this.router.navigate([this.returnUrl]);
            }, error => {
                this.error = error;
            });
    }
}
