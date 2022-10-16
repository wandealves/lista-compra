import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from './login';

const API = 'http://localhost:3333';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(email: string, senha: string) {
    return this.http.post<login>(`${API}/usuarios/login`,{email,senha});
  }
}
