import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ComprasComponent } from './compras/compras.component';
import { NovaCompraComponent } from './nova-compra/nova-compra.component';
import { EditarCompraComponent } from './editar-compra/editar-compra.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "compras",
    component: ComprasComponent
  },
  {
    path: "nova-compra",
    component: NovaCompraComponent
  },
  {
    path: "editar-compra/:id",
    component: EditarCompraComponent
  },
  {
    path: "novo-usuario",
    component: NovoUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
