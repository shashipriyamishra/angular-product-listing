import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './components/shared/shared.component';
import {ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { LoginComponent } from "../user/login/login.component";
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [SharedComponent,LoginComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    
  ],
  exports:[
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule,
    SharedComponent,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }
