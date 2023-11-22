import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "../models/User";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = sessionStorage.getItem("isUserLoggedIn") === "true";
  loggedUser?: User = JSON.parse(sessionStorage.getItem("loggedUser") ?? '{}')

  constructor(private userService: UserService) {
    console.log("new authService instance")
  }

  login(userName: string, password: string): boolean {
    const user = this.userService.findUserByUsername(userName)
    this.isUserLoggedIn = user?.password === password
    if (this.isUserLoggedIn) {
      this.loggedUser = user
      //F5
      sessionStorage.setItem('loggedUser', JSON.stringify(user));
      sessionStorage.setItem('isUserLoggedIn', "true");
    }
    //F5

    return this.isUserLoggedIn
  }

  logout(): void {
    this.isUserLoggedIn = false;
    sessionStorage.removeItem('isUserLoggedIn');
    sessionStorage.removeItem('loggedUser');
  }
}
