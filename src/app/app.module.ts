import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {ProdutoModule} from './core/produto/produto.module';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    ProdutoModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
