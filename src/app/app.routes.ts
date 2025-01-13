import { Routes } from '@angular/router';
import {ProdutoDetalharComponent} from './core/produto/produto-detalhar/produto-detalhar.component';
import {ProdutoAtualizarComponent} from './core/produto/produto-atualizar/produto-atualizar.component';
import {ProdutoCadastrarComponent} from './core/produto/produto-cadastrar/produto-cadastrar.component';
import {ProdutoListarComponent} from './core/produto/produto-listar/produto-listar.component';
import {ProdutoNavbarComponent} from './core/produto/produto-navbar/produto-navbar.component';

export const routes: Routes = [
  {
    path: '',
    component: ProdutoNavbarComponent
  },
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
  }];
