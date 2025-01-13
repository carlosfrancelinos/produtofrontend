import {Component, OnInit} from '@angular/core';
import {Produto} from '../model/produto';
import {ActivatedRoute, Router} from '@angular/router';
import {ProdutoService} from '../service/produto.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-produto-atualizar',
  imports: [
    FormsModule
  ],
  templateUrl: './produto-atualizar.component.html',
  standalone: true,
  styleUrl: './produto-atualizar.component.css'
})
export class ProdutoAtualizarComponent implements OnInit {

  id: string | undefined;
  produto: Produto = new Produto();
  submitted: boolean = false;

  constructor(private route: ActivatedRoute,private router: Router,
              private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produto = new Produto();

    this.id = this.route.snapshot.params['id'];

    this.produtoService.getProduto(this.id)
      .subscribe(data => {
        this.produto = data;
      }, error => console.log(error));
  }

  updateProduto() {
    this.produtoService.updateProduto(this.id, this.produto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produto = new Produto();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updateProduto();
  }

  gotoList() {
    this.router.navigate(['']);
  }
}
