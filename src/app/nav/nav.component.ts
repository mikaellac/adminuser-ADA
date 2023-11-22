import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {User} from "../models/User";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor( private authService: AuthService, private router: Router) {
  }

  home = async () => {
    await this.router.navigate(["/"])
  }
  login = async () => {
    await this.router.navigate(["/login"])
  }

  logout = async () => {
    await this.router.navigate(["/logout"])
  }

  isLoggedIn() {
    return this.authService.isUserLoggedIn;
  }

  loggedUser(): User | undefined {
    return this.authService.loggedUser
  }

  listProducts = async () => {
    await this.router.navigate(["/listar-produto"])
  }

  addProducts = async () => {
    await this.router.navigate(["/adicionar-produto"])
  }
}
