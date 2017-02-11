import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {Home} from './home/home';
import {Entrar} from './entrar/entrar';
import {Cadastro} from './cadastro/cadastro';
import {Card} from './card/card';
import {WebService} from './laravel.service';


@NgModule({
  declarations: [AppComponent, Home, Entrar, Cadastro, Card],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [WebService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}