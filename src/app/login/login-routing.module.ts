import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from "../login/login.module";
import { PetComponent } from "../pet/pet.component";


const routes: Routes = [
    {
        path: "pet", component: PetComponent ,
    }
];

@NgModule({
  imports: [
    PetComponent,
    LoginModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
