import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  newUserEmailAddress = '';

  constructor(private http: HttpClient) { }
  loginWithEmailAndPassword(username: string, password: string) {
    const url = environment.apiUrl + '/login/';
    const body = {
      "email": username,
      "password": password
    };
    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map(result => localStorage.setItem("token", result.token))
      )
  }

  registerUser(data: { email: string, password: string }) {
    return this.http.post<RegisterResponse>(environment.apiUrl + '/signup/', data)
      
  }

  getAuthToken() {
    return localStorage.getItem('token');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

interface RegisterResponse {
  email: string;
  token: string;
}

interface LoginResponse {
  token: string
}