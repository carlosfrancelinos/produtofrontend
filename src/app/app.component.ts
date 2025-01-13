import { Component } from '@angular/core';
import {ProdutoListarComponent} from './core/produto/produto-listar/produto-listar.component';
import {ProdutoCadastrarComponent} from './core/produto/produto-cadastrar/produto-cadastrar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'produtofrontend';
}
