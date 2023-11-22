import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
