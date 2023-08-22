import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User, UserDto} from "../model/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loggedIn: boolean = false;
  private userObject: User | undefined;

  constructor(private http: HttpClient) { }

  setUser(user: User) {
    this.userObject = user;
    this.loggedIn = true;
  }

  getUser(): User | undefined {
    return this.userObject;
  }

  login(user:UserDto) : Observable<User>{
    const url = 'https://localhost:8081/api/User/login';
    return this.http.post<User>(url, user);
  }
}
