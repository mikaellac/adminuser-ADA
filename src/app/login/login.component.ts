import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userName: string = "";
  password: string = "";
  formData: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.formData = new FormGroup({
      userName: new FormControl(""),
      password: new FormControl(""),
    });
  }

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;

    console.log("Login page: " + this.userName);
    console.log("Login page: " + this.password);

    const result = this.authService.login(this.userName, this.password)
    console.log("Is Login Success: " + result);

    if (result) {
      this.router.navigate(['/listar-produto']);
    }
  }

}
