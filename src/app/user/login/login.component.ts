import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from "../../core/services/authentication/authentication.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { User } from './../../models/user';
import { AppState, selectAuthenticationState } from '../../store/app.state';
import { Login } from "../../store/actions/authentication.action";




@Component({
selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  isSubmitted  =  false;
  loginForm : FormGroup;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar,
    private store: Store<AppState>
    ) {

      if (this.authenticationService && this.authenticationService.currentUserValue) {
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
      let snackBarRef = this.snackBar.open('Form is invalid', 'close', {
        duration: 3000
      });
      return;
    }
    this.store.dispatch(new Login(this.loginForm.value));
    // this.authenticationService.login(this.loginForm.value).subscribe((res)=>{
     
    //     console.log('output',res);
    //     this.router.navigateByUrl('/my-orders');
    //   },(err=>{
    //     let snackBarRef = this.snackBar.open(err.error, 'close', {
    //       duration: 3000
    //     });
    //   }));
    
  }
}
