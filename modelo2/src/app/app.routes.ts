import {Routes} from '@angular/router';

import {Home} from './home/home';
import {Entrar} from './entrar/entrar';
import {Cadastro} from './cadastro/cadastro';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'entrar', component: Entrar},
  {path: 'cadastro', component: Cadastro}
];