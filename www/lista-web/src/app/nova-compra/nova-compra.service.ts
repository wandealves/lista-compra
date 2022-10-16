import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API = 'http://localhost:3333';

@Injectable({
  providedIn: 'root',
})
export class NovaCompraService {
  constructor(private http: HttpClient) {}

  criar(nome: string) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<any>(
      `${API}/compras`,
      { nome },
      { headers: headers }
    );
  }
}
