import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
  }
  registerAction(action,event){
    if(action =='cancel'){
      this.router.navigateByUrl('/login');
    }
  }

}
