import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { PetComponent } from './pet/pet.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { RegisterComponent } from './user/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { SharedModule } from "./shared/shared.module";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationService } from './core/services/authentication/authentication.service';
import { AuthenticationEffects } from './store/effects/authentication.effects';
import { reducers } from './store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as authenticateReducer from './store/reducers/authentication.reducer';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetComponent,
    MyOrdersComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    SharedModule,
    EffectsModule.forRoot([AuthenticationEffects]),
    StoreModule.forRoot({login: authenticateReducer.reducer}),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    // StoreModule.forFeature('auth', reducers.authentication),
  ],
  providers: [AuthenticationService],
  exports:[StoreDevtoolsModule], 
  bootstrap: [AppComponent]
})
export class AppModule { }
