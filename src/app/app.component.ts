import { Component } from '@angular/core';
import {ProdutoListarComponent} from './core/produto/produto-listar/produto-listar.component';

@Component({
  selector: 'app-root',
  imports: [ProdutoListarComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'produtofrontend';
}
