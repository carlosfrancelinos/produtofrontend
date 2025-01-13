import {RouterModule, Routes} from '@angular/router';
import {ProdutoDetalharComponent} from './core/produto/produto-detalhar/produto-detalhar.component';
import {ProdutoAtualizarComponent} from './core/produto/produto-atualizar/produto-atualizar.component';
import {NgModule} from '@angular/core';
import {ProdutoListarComponent} from './core/produto/produto-listar/produto-listar.component';
import {ProdutoCadastrarComponent} from './core/produto/produto-cadastrar/produto-cadastrar.component';

export const routes: Routes = [
  {
    path: 'produto/listar',
    component: ProdutoListarComponent
  },
  {
    path: 'produto/cadastrar',
    component: ProdutoCadastrarComponent
  },
  {
    path: 'produto/detalhar/:id',
    component: ProdutoDetalharComponent
  },
  {
    path: 'produto/atualizar/:id',
    component: ProdutoAtualizarComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
