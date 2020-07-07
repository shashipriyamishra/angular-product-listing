import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./user/login/login.component";
import { HomeComponent } from "./home/home/home.component";
import { PetComponent } from "./pet/pet.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { RegisterComponent } from "./user/register/register.component";



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'pets', component: PetComponent},
  {path: 'my-orders', component: MyOrdersComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: PetComponent},
  {path: '**', component: PetComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
