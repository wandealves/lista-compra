import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
  });

  constructor(private service: LoginService,private router: Router) {}

  ngOnInit() {}

  onEntrar() {
    this.service
      .login(
        this.profileForm.value.email || '',
        this.profileForm.value.senha || ''
      )
      .subscribe((response) => {
        localStorage.removeItem('token');
        localStorage.setItem('token', response.token);
        this.router.navigate(['compras']);
      });
  }

  onRegistrar(){
    this.router.navigate(['novo-usuario']);
  }
}
