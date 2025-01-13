import {Component, OnInit} from '@angular/core';
import {Produto} from '../model/produto';
import {ActivatedRoute, Router} from '@angular/router';
import {ProdutoService} from '../service/produto.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-produto-detalhar',
  imports: [ CommonModule],
  templateUrl: './produto-detalhar.component.html',
  standalone: true,
  styleUrl: './produto-detalhar.component.css'
})
export class ProdutoDetalharComponent implements OnInit {

  id: string | undefined;
  produto: Produto = new Produto();

  constructor(private route: ActivatedRoute,private router: Router,
              private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produto = new Produto();

    this.id = this.route.snapshot.params['id'];

    this.produtoService.getProduto(this.id)
      .subscribe(data => {
        console.log(data)
        this.produto = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['produto/listar']);
  }
}
