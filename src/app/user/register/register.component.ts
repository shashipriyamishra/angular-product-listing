import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,private store: Store<any>) { }

  ngOnInit(): void {
    console.log('register', this.store);
    this.store.select('login').subscribe((state => 
      console.log('hi',state)
      ))
  }
  registerAction(action,event){
    if(action =='cancel'){
      this.router.navigateByUrl('/login');
    }
  }

}
