import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from "../service/user.service";
import {User} from "../model/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService:UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      this.userService.login(this.loginForm.value).subscribe(
        (data) => {
          console.log('Response:', data);
          this.userService.setUser(data);
          this.router.navigate(['/main']);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
