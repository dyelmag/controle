import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

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
  ) { }

  ngOnInit() {
  }

  entrar() {
    this.submitted = true;

    if (this.login.valid) {
      this.erro = true;
    }
  }

}
