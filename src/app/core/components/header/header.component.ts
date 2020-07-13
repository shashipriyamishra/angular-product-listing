import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout } from "../../../store/actions/authentication.action";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() loginData;
  constructor(private store: Store) { }

  ngOnInit(): void {
    console.log('header',this.loginData)
  }
  logout(){
    this.store.dispatch(new Logout());
  }

}
