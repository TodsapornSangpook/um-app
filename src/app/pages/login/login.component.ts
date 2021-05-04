import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const { username, password } = this.loginForm.value;

    if (username === 'ice' && password === '123456') {
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Login failed.',
        detail: 'Invalid username or password.',
      });
    }
  }
}
