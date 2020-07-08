import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from "../../core/services/authentication/authentication.service";




@Component({
selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  isSubmitted  =  false;
  loginForm : FormGroup;
  // loginForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authentication: AuthenticationService) {

      if (this.authentication && this.authentication.currentUserValue) {
        this.router.navigate(['/']);
        }

     }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get formControls() { 
    return this.loginForm.controls; 
  }

  redirect(action,event){
    if(action == 'login'){

    }else{
      this.router.navigateByUrl('/register');
    }
  }
  onSubmit(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authentication.login(this.loginForm.value);
    this.router.navigateByUrl('/');
  }
}
