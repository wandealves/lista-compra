import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product';
import { Item } from './item';
import { Created } from '../created';
import { Compra } from '../compras/compra';
import { Updated } from '../updated';

const API = 'http://localhost:3333';

@Injectable({
  providedIn: 'root',
})
export class EditarService {
  constructor(private http: HttpClient) {}

  getById(id: number) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<Compra>(`${API}/compras/${id}`, { headers: headers });
  }

  update(id: number, nome: string) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.put<Updated>(
      `${API}/compras/${id}`,
      { nome },
      { headers: headers }
    );
  }

  products() {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<Product[]>(`${API}/produtos`, { headers: headers });
  }

  itens(id: number) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<Item[]>(`${API}/itens/${id}`, { headers: headers });
  }

  addItem(idCompra: number, idProduto: number) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<Created>(
      `${API}/itens`,
      { idCompra, idProduto },
      { headers: headers }
    );
  }

  deleteItem(id: number) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.delete<any>(`${API}/itens/${id}`, {
      headers: headers,
    });
  }
}
