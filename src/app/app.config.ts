import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {ProdutoService} from './core/produto/service/produto.service';
import {HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), ProdutoService, importProvidersFrom((HttpClientModule)), provideHttpClient(withFetch())]
};
