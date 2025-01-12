import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProdutoCadastrarComponent} from './produto-cadastrar/produto-cadastrar.component';
import {ProdutoListarComponent} from './produto-listar/produto-listar.component';



@NgModule({
  declarations: [],
  exports: [
    ProdutoCadastrarComponent,
    ProdutoListarComponent
  ],
  imports: [
    CommonModule,
    ProdutoCadastrarComponent,
    ProdutoListarComponent
  ]
})
export class ProdutoModule { }
