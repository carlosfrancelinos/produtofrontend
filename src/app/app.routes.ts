import {RouterModule, Routes} from '@angular/router';
import {ProdutoDetalharComponent} from './core/produto/produto-detalhar/produto-detalhar.component';
import {ProdutoAtualizarComponent} from './core/produto/produto-atualizar/produto-atualizar.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {
    path: 'produto/:id',
    component: ProdutoDetalharComponent
  },
  {
    path: 'update/:id',
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
