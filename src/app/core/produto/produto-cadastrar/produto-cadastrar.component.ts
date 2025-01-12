import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import {ProdutoService} from '../service/produto.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'produto-cadastrar',
  imports: [
    FormsModule
  ],
  templateUrl: './produto-cadastrar.component.html',
  standalone: true,
  styleUrl: './produto-cadastrar.component.css'
})
export class ProdutoCadastrarComponent implements OnInit {
  produto: Produto = new Produto();
  submitted: boolean = false;

  constructor(private produtoService: ProdutoService,
              private router: Router) {  }

  ngOnInit() {
  }

  newProduto(): void {
    this.submitted = false;
    this.produto = new Produto();
  }

  save() {
    this.produtoService.createProduto(this.produto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produto = new Produto();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/produtos']);
  }
}
