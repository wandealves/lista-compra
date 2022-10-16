import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComprasComponent } from './compras/compras.component';
import { NovaCompraComponent } from './nova-compra/nova-compra.component';
import { EditarCompraComponent } from './editar-compra/editar-compra.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
      AppComponent,
      ComprasComponent,
      NovaCompraComponent,
      EditarCompraComponent,
      NovoUsuarioComponent,
      LoginComponent,
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    //CommonModule,
   // FormsModule
  ],
 // exports: [
 //   CommonModule,
  //  FormsModule,
   // ReactiveFormsModule
  //],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
