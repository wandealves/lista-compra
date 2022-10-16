import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { NovaCompraService } from './nova-compra.service';

@Component({
  selector: 'app-nova-compra',
  templateUrl: './nova-compra.component.html',
  styleUrls: ['./nova-compra.component.css'],
})
export class NovaCompraComponent implements OnInit {
  profileForm = new FormGroup({
    nome: new FormControl(''),
  });

  constructor(private service: NovaCompraService, private router: Router) {}

  ngOnInit() {}

  onSalvar() {
    this.service
      .criar(this.profileForm.value.nome || '')
      .subscribe((response) => this.router.navigate(['compras']));
  }
}
