import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from "../login/login.module";



const routes: Routes = [

];

@NgModule({
  imports: [
    LoginModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
