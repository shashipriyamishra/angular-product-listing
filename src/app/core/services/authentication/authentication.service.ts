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
  login(form) {
    return this.http.post<any>(`http://localhost:3000/users`, { form })
        .pipe(map(user => {
            // store user details and jwt token 
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
}
}
