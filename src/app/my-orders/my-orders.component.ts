import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  constructor(private store: Store,) { }

  ngOnInit(): void {
   
  }

}
