import {Injectable} from '@angular/core';
import {User} from "../models/User";
import {USERS} from "../data/mock-users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]

  constructor() {
    const users = JSON.parse(sessionStorage.getItem("users") ?? "[]")
    if (users.length) {
      this.users = users
    } else {
      this.users = USERS
      sessionStorage.setItem("users", JSON.stringify(USERS))
    }
  }

  findUserByUsername = (username: string): User | undefined => {
    return this.users.find(user => user.username === username)
  }
}
