import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { NovoUsuarioService } from './novo-usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  profileForm = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
  });

  constructor(private service: NovoUsuarioService, private router: Router) {}

  ngOnInit(): void {}

  onRegistrar() {
    this.service
      .criar(
        this.profileForm.value.nome || '',
        this.profileForm.value.email || '',
        this.profileForm.value.senha || ''
      )
      .subscribe((response) => {
        this.router.navigate(['']);
      });
  }
}
