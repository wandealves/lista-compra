import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EditarService } from './editar.service';
import { Product } from './product';
import { Item } from './item';
import { Compra } from '../compras/compra';

@Component({
  selector: 'app-editar-compra',
  templateUrl: './editar-compra.component.html',
  styleUrls: ['./editar-compra.component.css'],
})
export class EditarCompraComponent implements OnInit {
  products: Product[] = [];
  itens: Item[] = [];
  productSelected: Product | null = null;
  compra: Compra | null = null;
  id: number = 0;

  form = new FormGroup({
    product: new FormControl(),
    nome: new FormControl(''),
  });

  constructor(
    private service: EditarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.service.getById(this.id).subscribe((response) =>
      this.form.patchValue({
        product: null,
        nome: response.nome,
      })
    );

    this.service.products().subscribe((products) => {
      this.products = products;
    });

    this.service.itens(this.id).subscribe((products) => {
      this.itens = products;
    });
  }

  onAddItem() {
    console.log(this.form.value);

    this.service
      .addItem(
        this.id,
        this.form.value.product ? this.form.value.product.id : 0
      )
      .subscribe((response) => {
        this.service.itens(this.id).subscribe((products) => {
          this.itens = products;
        });
      });
  }

  onUpdate() {
    this.service
      .update(this.id, this.form.value.nome || '')
      .subscribe((response) => {
        this.router.navigate(['compras']);
      });
  }

  onDeleteItem(id: number) {
    this.service.deleteItem(id).subscribe((response) => {
      this.service.itens(this.id).subscribe((products) => {
        this.itens = products;
      });
    });
  }
}
