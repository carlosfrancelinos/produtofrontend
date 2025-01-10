import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProdutoCadastrarComponent} from './produto-cadastrar/produto-cadastrar.component';



@NgModule({
  declarations: [],
  exports: [
    ProdutoCadastrarComponent
  ],
  imports: [
    CommonModule,
    ProdutoCadastrarComponent,
  ]
})
export class ProdutoModule { }
