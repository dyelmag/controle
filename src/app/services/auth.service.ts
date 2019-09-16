import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;

  constructor(private rota: Router) { }

  login(email: any, senha: any) {
    if ((email === 'teste@teste.com') && (senha === '123')) {
      this.usuarioAutenticado = true;
      return {'id': 1, 'nome': 'Teste Aaaa', 'token': 123};
    }
    this.usuarioAutenticado = false;
    return false;
  }
}
