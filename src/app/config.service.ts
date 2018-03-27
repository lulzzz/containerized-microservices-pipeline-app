import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';

// export interface ChangeEmail {
//   email: string;
// }

// export interface CreateUser {
//   username: string;
//   password: string;
//   email: string;
// }

// export interface Login {
//   username: string;
//   password: string;
// }

// export interface ChangePass {
//   username: string;
//   password: string;
// }

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  configUrl = 'localhost:5000/';

  // postChangePass(email: string, newpassword: string) {
  //   let newpass: ChangePass = {
  //     username: email,
  //     password: newpassword
  //   }
  //   return this.http.post<ChangePass>(this.configUrl + 'api/account', newpass);
  // }

  // postCreate(email: string, password1: string, password2: string) {
  //   let newuser: CreateUser = {
  //     username: email,
  //     password: password1,
  //     email: email,
  //   }
  //   return this.http.post<CreateUser>(this.configUrl + 'api/account', newuser);
  // }

  // postLogin(email: string, password: string) {
  //   let login: Login = {
  //     username: email,
  //     password: password, // Login password = input password
  //   };
  //   return this.http.post<Login>(this.configUrl + 'api/login', login);
  //   // return this.http.get<Login>(this.configUrl + 'api/login');
  // }

  // postChangeEmail(email: string) {
  //   let newemail: ChangeEmail = {
  //     email: email
  //   }
  //   return this.http.post<ChangeEmail>(this.configUrl + 'api/account', newemail);
  // }
}
