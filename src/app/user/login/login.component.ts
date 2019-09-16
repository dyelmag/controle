import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  erro = false;
  submitted = false;

  login = this.fb.group({
    senha: ['', [Validators.required]],
    email: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  entrar() {
    this.submitted = true;
    if (this.login.valid) {
      const res = this.authService.login(this.login.value.email, this.login.value.senha);
      if (!res) {
        this.erro = true;
      } else {
        this.erro = false;
      }
    }
  }

}
