import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, from,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  testUser: User = {email: 'user@email.com',password: '1234', token: 'sampleToken'};

  private currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient) { }


  public get currentUserValue() {
    return this.currentUserSubject && this.currentUserSubject.value;
}
getToken(): string {
  return localStorage.getItem('token');
}

isLoggedIn() {
  const token = this.getToken();
  return token != null;
}


login(form): Observable<any> {
  //this is a mocked response to be able to test the example

  //this would probably make an http post to the server to process the login
  return this.http.post(`http://localhost:3000/signin`,form);
}
// public login(form){
//   return this.http.post(`http://localhost:3000/signin`,form);
// }



}
