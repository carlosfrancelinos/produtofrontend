import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Produto} from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {
  }

  getProduto(id: string | undefined): Observable<any> {
    return this.http.get(`${this.baseUrl}/produto/${id}`);
  }

  createProduto(produto: Produto): Observable<Object> {
    return this.http.post(`${this.baseUrl}/produto`, produto);
  }

  updateProduto(id: string | undefined, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/produto/${id}`, value);
  }

  deleteProduto(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/produto/${id}`, { responseType: 'text' });
  }

  getProdutosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/produtos`);
  }
}
