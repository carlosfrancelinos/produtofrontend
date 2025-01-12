import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { Observable } from 'rxjs';
import { ProdutoService } from '../service/produto.service';
import { Router } from '@angular/router';
import {AsyncPipe, CommonModule} from '@angular/common';

@Component({
  selector: 'app-produto-listar',
  imports: [
    AsyncPipe, CommonModule
  ],
  templateUrl: './produto-listar.component.html',
  standalone: true,
  styleUrl: './produto-listar.component.css'
})
export class ProdutoListarComponent implements OnInit {
  produtos: Observable<Produto[]> | undefined;

  constructor(private produtoService: ProdutoService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.produtos = this.produtoService.getProdutosList();
  }

  deleteProduto(id: string) {
    this.produtoService.deleteProduto(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  produtoDetails(id: string){
    this.router.navigate([`produto/${id}`]);
  }

  updateProduto(id: string){
    this.router.navigate([`update/${id}`]);
  }
}
