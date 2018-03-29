import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn: boolean;
  private username: string;
  private password: string;
  private token: string;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(token: string): void {
    this.token = token;
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }

  public getUsername(): string {
    return this.username;
  }

  public getToken(): string {
    return this.token;
  }

}
