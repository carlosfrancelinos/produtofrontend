import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProdutoCadastrarComponent} from './produto-cadastrar/produto-cadastrar.component';
import {ProdutoListarComponent} from './produto-listar/produto-listar.component';
import {ProdutoDetalharComponent} from './produto-detalhar/produto-detalhar.component';



@NgModule({
  declarations: [],
  exports: [
    ProdutoCadastrarComponent,
    ProdutoListarComponent,
    ProdutoDetalharComponent
  ],
  imports: [
    CommonModule,
    ProdutoCadastrarComponent,
    ProdutoListarComponent,
    ProdutoDetalharComponent
  ]
})
export class ProdutoModule { }
