import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ComprasService } from './compras.service';
import { Compra } from './compra';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css'],
})
export class ComprasComponent implements OnInit {
  list: Compra[];

  constructor(private service: ComprasService, private router: Router) {
    this.list = [];
  }

  ngOnInit() {
    this.service.list().subscribe((response) => (this.list = response));
  }

  onNovo() {
    this.router.navigate([`nova-compra`]);
  }

  onEditar(id: number) {
    this.router.navigate([`editar-compra/${id}`]);
  }
}
