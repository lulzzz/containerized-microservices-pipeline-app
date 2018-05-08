import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

export interface ChangeEmail {
  email: string;
}

export interface CreateUser {
  username: string;
  email: string;
  password: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface ChangePass {
  password: string;
  newpassword: string;
}

export interface LoginResponse {
  token: string;
  id: string;
  userName: string;
  email: string;
}

@Injectable()
export class ConfigService {

  // calling constructor with token is okay
  constructor(private http: HttpClient) {
    // this.configUrl = environment.serviceEndpoint;
  }

  private configUrl = '';

  public createHeader(token: string): { headers: HttpHeaders } {
    const header = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return header;
  }

  public postChangeEmail(email: string, token: string) {
    const newemail: ChangeEmail = {
      email: email
    };
    const header = this.createHeader(token);
    return this.http.put<HttpHeaders>(this.configUrl + 'api/account', newemail, header);
  }

  public postCreate(username: string, email: string, password1: string): Observable<HttpResponse<LoginResponse>> {
    const newuser: CreateUser = {
      username: username,
      email: email,
      password: password1
    };
    return this.http.post<HttpResponse<LoginResponse>>(this.configUrl + 'api/account', newuser);
  }

  public postChangePass(oldpass: string, newpassword: string, token: string) {
    const newpass: ChangePass = {
      password: oldpass,
      newpassword: newpassword
    };
    const header = this.createHeader(token);
    return this.http.put<HttpResponse<any>>(this.configUrl + 'api/account', newpass, header);
  }

  public postLogin(email: string, password: string): Observable<HttpResponse<LoginResponse>> {
    const login: Login = {
      username: email,
      password: password
    };
    return this.http.post<HttpResponse<LoginResponse>>(this.configUrl + 'api/login', login);
  }

  public getUsername(token: string) {
    return this.http.get<HttpResponse<any>>(this.configUrl + 'api/account');
  }
}
