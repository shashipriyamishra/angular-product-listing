import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, from,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient) { }


  public get currentUserValue() {
    return this.currentUserSubject && this.currentUserSubject.value;
}


public login(form){
  return this.http.post(`http://localhost:3000/signin`,form);
}



}
