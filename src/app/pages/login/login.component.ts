import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService, LoginService],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const { username, password } = this.loginForm.value;

    const profile = this.loginService.signInService(username, password);

    if (!profile) {
      this.messageService.add({
        severity: 'error',
        summary: 'Login failed.',
        detail: 'Invalid username or password.',
      });
    } else {
      console.log('profile => ', profile);
    }
  }

  onClickRegister() {
    this.router.navigate(['/register']);
  }
}
